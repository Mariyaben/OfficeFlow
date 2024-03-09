import json
from datetime import datetime
import torch.nn as nn
import openai
import os
import pandas as pd
import time
from dotenv import load_dotenv

# Loading the environment variable
load_dotenv()
openai.api_key = os.getenv('OPEN_AI_KEY')



'''
Converting the data into the following format:
    {
        "visit" : [22,20,24,25],
        "time"  : [1, 2 , 3, 6],
        "goal"  : [110]
    } 
'''
vocab = {'gold_loan_renew': 0, 'app_login': 1, 'priority_banking_request': 2, 'transaction_imps': 3, 'fd_open': 4, 'transaction_own_acc': 5, 'rd_opening': 6, 'billpay_recharge': 7, 'kyc_update': 8, 'FOR_add_beneficiary': 9, 'FOR_send_money': 10, 'fsld_open': 11, 'mail_id_update': 12, 'fast_tag': 13, 'transaction_neft': 14, 'apply_apy': 15}

keys = {}


def convert_time(timestamp1_str,timestamp2_str):
    # Convert the timestamps to datetime objects
    timestamp1 = datetime.strptime(timestamp1_str, '%d/%m/%Y, %H:%M:%S')
    timestamp2 = datetime.strptime(timestamp2_str, '%d/%m/%Y, %H:%M:%S')

    # Calculate the time difference
    time_difference = timestamp2 - timestamp1

    return time_difference.seconds

def preprocess_frontend_data(datas):
    model_input = {
        "visit" : [],
        "time"  : [],
        "goal"  : [-1]
    }
    keys_list = []

    # Adding to the vocabulary
    for i,data in enumerate(datas):
        task_name = data['eventName']
        if task_name not in keys:
            keys[str(i)] = task_name
            vocab[task_name] = i

    initial_time = datas[0]['timestamp']
    

    for i,data in enumerate(datas):
        model_input["visit"].append(vocab[data["eventName"]])
        # Convertion of time
        if i != 0 :
            timestamp_1 = datas[i-1]["timestamp"]
            timestamp_2 = datas[i]["timestamp"]
            model_input["time"].append(convert_time(timestamp_1,timestamp_2))
        else:
            model_input["time"].append(0)

    return [model_input]

from torch.utils.data import DataLoader, Dataset
import torch


# Define a custom dataset
class AppDataset(Dataset):
    def __init__(self, data, vocab):
        self.data = data
        self.vocab = vocab
        
    def __len__(self):
        return len(self.data)

    def __getitem__(self, idx):
        visit = self.data[idx]
        app_features = torch.LongTensor(visit["visit"])
        times = torch.LongTensor(visit["time"])
        goal = torch.LongTensor([visit["goal"][0]])
        return app_features, times, goal

# Define the LSTM Encoder-Decoder model
class EncoderDecoder(nn.Module):
    def __init__(self, vocab_size, embedding_dim, hidden_dim, output_dim, num_layers, dropout):
        super(EncoderDecoder, self).__init__()

        # Embedding layer
        self.embedding = nn.Embedding(vocab_size, embedding_dim)

        # Encoder
        self.encoder = nn.LSTM(embedding_dim, hidden_dim, num_layers=num_layers, dropout=dropout)

        # Decoder
        self.decoder = nn.LSTM(embedding_dim, hidden_dim, num_layers=num_layers, dropout=dropout)

        # Output layer
        self.out = nn.Linear(hidden_dim, output_dim)

        self.dropout = nn.Dropout(dropout)

    def forward(self, app_features, times, goal):
        # Embed app features and times
        embedded_app = self.dropout(self.embedding(app_features))
        embedded_times = self.dropout(self.embedding(times))

        # Encoder
        _, (hidden, cell) = self.encoder(embedded_app)

        # Decoder
        output, _ = self.decoder(embedded_times, (hidden, cell))

        # Final output
        prediction = self.out(output)

        return prediction[:,-1]
        
def fill_messages(set_of_preds):
    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "system", "content": "Give 2 sentence questions to the user to suggest what he is searching for ?"},
        {"role": "system", "content": "Be formal, no salutations just questions"},
        {"role": "user", "content": "I am user of the South Indian Bank Application, I need help finding a feature"},
        {"role": "system", "content": "The User is searching for {0}".format(set_of_preds[0])},
        {"role": "system", "content": "Give the user a  suggestion"},
        {"role": "user", "content": "What could I be possibly searching ? "},
    ]

    return messages

def get_message(set_of_preds,model="gpt-3.5-turbo"):
    text_chat = {}
    for i in set_of_preds:
        messages = fill_messages(i)
        response = openai.ChatCompletion.create(
            model=model,
            messages=messages,
            temperature=0,
        )
        chat = response.choices[0].message["content"]
        text_chat[i] = chat
    return text_chat



'''
Method to run the usage inference

input_data : dictionary of the format

{
  "data" :
    [
        {
        "event": "button pressed",
        "eventName": "signin_button",
        "timestamp": "01/11/2023, 03:00:58"
        }
    ]
}
'''
def run_usage_inference(input_data: dict, model_path: str = None):
    # print('input_data',input_data)
    # Defining model params

    # Define the model's hyperparameters
    vocab_size = 400  # Vocabulary size
    embedding_dim = 500  # Dimension of word embeddings
    hidden_dim = 256  # LSTM hidden state dimension
    output_dim = vocab_size  # Output dimension
    num_layers = 2  # Number of LSTM layers
    dropout = 0.5  # Dropout probability


    # Loading pre-trained model
    model = EncoderDecoder(vocab_size, embedding_dim, hidden_dim, output_dim, num_layers, dropout)
    if model_path is not None:
        model.load_state_dict(torch.load(model_path))
    model.eval()

    # Preprocessing the data to be inputted to the model
    data = preprocess_frontend_data(input_data["data"])
    train_dataset = AppDataset(data, vocab)
    keys = list(vocab.keys())

    # print("vocab",vocab)


    app_features, times, goal = train_dataset[0]

    output = model(app_features, times, goal)
    output_dim = output.shape[-1]
    output = output.view(-1, output_dim)
    indexes_in_order = torch.argsort(output)


    length = len(indexes_in_order[0])



    sorted_keys  = [keys[i] for i in indexes_in_order[0]]

    # print(sorted_keys)
    chats = get_message([sorted_keys[0]])

    return chats

import json
# if __name__ == "__main__":

#     dataset = {
#         "data" :
#         [
#             {
#             "event": "button pressed",
#             "eventName": "transaction_imps",
#             "timestamp": "01/11/2023, 03:00:58"
#             },
#             {
#             "event": "button pressed",
#             "eventName": "FOR_send_money",
#             "timestamp": "01/11/2023, 03:01:20"
#             },
#             {
#             "event": "button pressed",
#             "eventName": "fsld_open",
#             "timestamp": "01/11/2023, 03:01:41"
#             },
#             {
#             "event": "button pressed",
#             "eventName": "transaction_imps",
#             "timestamp": "01/11/2023, 03:00:58"
#             },
#             {
#             "event": "button pressed",
#             "eventName": "FOR_send_money",
#             "timestamp": "01/11/2023, 03:01:20"
#             }
#         ]
#     }

#     with open('./test.json', 'r') as json_file:
#         data = json.load(json_file)
#         # print(data)

    
#     out = run_usage_inference(
#         data,
#         './model_2.pt',
#     )

#     # print(out)
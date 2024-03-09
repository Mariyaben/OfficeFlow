import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, Dataset
import json

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



data_json = json.load(open("dataset.json"))
data = data_json["data"]



vocab = {'gold_loan_renew': 0, 'app_login': 1, 'priority_banking_request': 2, 'transaction_imps': 3, 'fd_open': 4, 'transaction_own_acc': 5, 'rd_opening': 6, 'billpay_recharge': 7, 'kyc_update': 8, 'FOR_add_beneficiary': 9, 'FOR_send_money': 10, 'fsld_open': 11, 'mail_id_update': 12, 'fast_tag': 13, 'transaction_neft': 14, 'apply_apy': 15}

keys = list(vocab.keys())

# Define the model's hyperparameters
vocab_size = 400  # Vocabulary size
embedding_dim = 500  # Dimension of word embeddings
hidden_dim = 256  # LSTM hidden state dimension
output_dim = vocab_size  # Output dimension
num_layers = 2  # Number of LSTM layers
dropout = 0.5  # Dropout probability
batch_size = 1  # Batch size
num_epochs = 5 # Number of epochs

# Create an instance of the Encoder-Decoder model
model = EncoderDecoder(vocab_size, embedding_dim, hidden_dim, output_dim, num_layers, dropout)

# Define the loss function and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

print(keys)

# Create a DataLoader for your dataset
train_dataset = AppDataset(data, vocab)
train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)

# Create a DataLoader for your validation dataset
validation_dataset = AppDataset(data, vocab)
validation_loader = DataLoader(validation_dataset, batch_size=batch_size, shuffle=True)

# Training loop
for epoch in range(num_epochs):
    model.train()
    for i, (app_features, times, goal) in enumerate(train_loader):
        
        optimizer.zero_grad()

        output = model(app_features, times, goal)
        output_dim = output.shape[-1]
        output = output.view(-1, output_dim)
        goal = goal.view(-1)

        loss = criterion(output, goal)
        loss.backward()
        optimizer.step()

        print("Epoch: {}/{} loss {}".format(epoch+1, num_epochs,loss), end="\r")

# Save the model
torch.save(model.state_dict(), "./model_2.pt")

#



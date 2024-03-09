import json
import random
import torch
from nltk_utils import bag_of_words, tokenize
from model import NeuralNet

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

with open('intents.json', 'r') as f:
    intents = json.load(f)

File = "data.pth"
data = torch.load(File)  # loading the saved data from data.pth file
input_size = data["input_size"]
num_classes = data["num_classes"]
hidden_size = data["hidden_size"]
words = data["words"]
tags = data["tags"]
model_state = data["model_state"]

model = NeuralNet(input_size, hidden_size, num_classes).to(device)
model.load_state_dict(model_state)  # loading the state of the model
model.eval()

bot_name = "Adam"
print("Hey there! This is Office Flow's HR, your Virtual Human Resource (H.R.) Representative")
print("What can I do for you today?")


def getResponse(msg):
    # sentence = input('You: ')
    # if sentence == "bye":
    #     print('I hope I was able to address your concern')
    #     print('Thank you')
    #     break

    sentence = tokenize(msg)
    X = bag_of_words(sentence, words)
    X = X.reshape(1, X.shape[0])  # reshaping the X to have 1 row and num of cols=rows as the model expects it in
    # this format
    X = torch.from_numpy(X).to(device)
    # bag of words returns a np array, and we have to convert it to a tensor

    output = model(X)

    _, predicted = torch.max(output, dim=1)
    tag = tags[predicted.item()]  # to access the predicted tag through its predicted label

    # to get raw probability values, we apply softmax as we used cross entropy loss instead in training
    probabilities = torch.softmax(output, dim=1)
    probability = probabilities[0][predicted.item()]

    if probability > 0.75:
        for intent in intents["intents"]:
            if tag == intent["tag"]:
                return random.choice(intent['responses'])
    else:
        return "Sorry, I didn't quite get that."


if __name__ == "__main__":  # to run the chat on terminal
    print("Let's chat!")
    while True:
        sentence = input('You: ')
        if sentence == 'bye':
            break

        response = getResponse(sentence)
        print(response)

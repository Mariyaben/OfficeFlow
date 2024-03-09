import json
import numpy as np
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader
from nltk_utils import tokenize, stem, bag_of_words
from model import NeuralNet

with open('intents.json', 'r') as f:  # importing intents.json with read mode
    intents = json.load(f)

words = []  # to store all the words among all sentences and words in the intents.json file
tags = []  # to store all the tags
xy = []  # to store patterns and responses
for intent in intents['intents']:  # look for data in intents with the key intents
    tag = intent['tag']  # look for tag key in the intents key data
    tags.append(tag)
    for pattern in intent['patterns']:  # looping over different patterns with key patterns in the intents key data
        # tokenizing each pattern
        w = tokenize(pattern)  # to store words in each sentence ie pattern. Here, we use extend here instead of
        # append because w is an array, and we don't want to create an array of arrays
        words.extend(w)  # to store all the words in all sentences
        xy.append((w, tag))

ignore = ['!', '@', '#', '$', '%', '^', '&', '*', '?']
print(words)
# stemming
words = [stem(w) for w in words if w not in ignore]
# putting all words in a set to remove duplicates
words = sorted(set(words))  # sorted function returns a list with words sorted alphabetically
print(words)
tags = sorted(set(tags))
print(tags)

X_train = []  # bag of words
Y_train = []  # tags

for (pattern_sentence, tag) in xy:
    bag = bag_of_words(pattern_sentence, words)
    X_train.append(bag)

    label = tags.index(tag)  # to retrieve index of each tag and use it as label
    Y_train.append(label)

X_train = np.array(X_train)
Y_train = np.array(Y_train)


# as we are using pytorch, instead of using one hot encoding, we use CrossEntropyLoss as a loss criteria which has
# softmax integrated in it

class ChatDataset(Dataset):
    def __init__(self):
        self.num_samples = len(X_train)
        self.x_data = X_train
        self.y_data = Y_train

    # dataset at any index
    def __getitem__(self, index):
        return self.x_data[index], self.y_data[index]  # returns x,y as a tuple

    def __len__(self):
        return self.num_samples


# hyper parameters

batch_size = 8
hidden_size = 8
input_size = len(X_train[0])  # since all bag of words arrays have the same size, ie equal to size of all words array
num_classes = len(tags)
learning_rate = 0.001
num_epochs = 1000

dataset = ChatDataset()
train_loader = DataLoader(dataset=dataset, batch_size=batch_size, shuffle=True, num_workers=0)
# num_workers is for multi-threading or  multiprocessing to speed up the data-retrieval
# DataLoader helps us iterate over the dataset by passing samples as mini batches, re-shuffling the data at each epoch

print(input_size, len(words))
print(num_classes, len(tags))

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = NeuralNet(input_size, hidden_size, num_classes).to(device)

criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

for epoch in range(num_epochs):
    for (all_words, labels) in train_loader:  # unpacking bags and labels from the dataset
        all_words = all_words.to(device)
        labels = labels.to(dtype=torch.long).to(device)

        # forward
        outputs = model(all_words)
        loss = criterion(outputs, labels)

        # backward and optimizer step
        optimizer.zero_grad()  # emptying the gradients
        loss.backward()  # dLoss/dx
        optimizer.step()  # performs a single optimization step

    if (epoch + 1) % 100 == 0:
        print(f'epoch {epoch + 1}/{num_epochs}, loss={loss.item():.4f}')
        # loss is a single item tensor (ie array or vector)
        # loss.item() extracts the loss' value as a float

print(f'final loss={loss.item():.4f}')

data = {
    "model_state": model.state_dict(),
    "input_size": input_size,
    "num_classes": num_classes,
    "hidden_size": hidden_size,
    "words": words,
    "tags": tags
}

File = "data.pth"
torch.save(data, File)  # this will serialise and save the data to file

print(f'Training complete. File saved to {File}')

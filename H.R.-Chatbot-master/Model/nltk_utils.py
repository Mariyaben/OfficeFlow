import nltk
nltk.download('punkt')
import nltk
import numpy as np
from nltk.stem.porter import PorterStemmer

stemmer = PorterStemmer()


def tokenize(sentence):
    return nltk.word_tokenize(sentence)


def stem(word):
    return stemmer.stem(word.lower())  # stemming the word, simultaneously converting it to lowercase


def bag_of_words(tokenized_sentence, all_words):
    tokenized_sentence = [stem(w) for w in tokenized_sentence]  # stemming words in each sentence
    bag = np.zeros(len(all_words), dtype=np.float32)
    # enumerate returns a pair of index and the value at that index
    for index, w in enumerate(all_words):
        if w in tokenized_sentence:
            bag[index] = 1.0

    return bag


sentence = ["hello", "how", "are", "you"]
words = ["hi", "hello", "I", "you", "bye", "thank", "cool"]
bag = bag_of_words(sentence, words)
print(bag)
# a = "How long does shipping take?"
# print(a)
# a = tokenize(a)
# print(a)
#
# words = ["Organ", "Organize", "Organization"]
# stemmed_words = [stem(w) for w in words]
# print(stemmed_words)

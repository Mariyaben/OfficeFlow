import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset

# Define a custom dataset for your data format
class PageSequenceDataset(Dataset):
    def __init__(self, data):
        self.data = data

    def __len__(self):
        return len(self.data)

    def __getitem__(self, idx):
        visit_sequence = torch.LongTensor(self.data[idx]["visit"])
        goal_page = self.data[idx]["goal"][0]  # Assuming there's only one goal page per sequence
        return visit_sequence, goal_page

# Instantiate the dataset and dataloader
data = {
    "keys" : {
        "10" : "Home",
        "20" : "Login Now",
        "21" : "UPI",
        "22" : "Pay To Contacts",
        "23" : "Insurace",
        "24" : "Net Banking",
        "25" : "Bank Holidays",
        "33" : "Pay To Account",
        "34" : "Pay To IFSC",
        "29" : "Pay To Aadhar",
        "42" : "Pay To Mobile",
        "110" : "Statement",
        "123" : "Pay To Mobile",
        "190" : "Pay To VPA",
        "145" : "Pay To Account"

    } , 
    "data" : [
        {
            "visit" : [22,20,24,25],
            "time"  : [1, 2 , 2, 5],
            "goal"  : [110]
        } , 
        {
            "visit" : [22,24,22,21,33],
            "time"  : [1, 2 , 3, 5,45],
            "goal"  : [190]
        } , 
        {
            "visit" : [29,20,34,25,21],
            "time"  : [1, 13 , 2, 5, 11],
            "goal"  : [123]
        } , 
        {
            "visit" : [22,20,42,22,10],
            "time"  : [1, 2, 2, 5, 3],
            "goal"  : [145]
        } 
    ]
}



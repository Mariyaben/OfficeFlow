import pandas as pd
import random
import json

csv_file = "./sib_finathon_dataset.csv"
df = pd.read_csv(csv_file)

df['timestamp'] = pd.to_datetime(df['timestamp'])

df['time'] = df['timestamp'].dt.time
df['date'] = df['timestamp'].dt.date


customer_summary = df.groupby(['customer_id']).agg(
    {'scheme': 'unique', 'date': 'unique', 'time': 'unique', 'event' : 'unique'}
).reset_index()

customer_summary.to_csv('customer_summary.csv', index=False)

keys_list = []
keys = {}
rev_keys = {}
count = 0

for _, row in customer_summary.iterrows():
    for ev in row['event']:
        if ev not in keys_list:
            keys_list.append(ev)
            keys[str(count)] = str(ev)
            rev_keys[ev] = count
            count+=1


# Conversion to a sequence

data = []

for _, row in customer_summary.iterrows():
    userdata = {
            "visit" : [],
            "time"  : [],
            "goal"  : []
    }
    time_s = 1
    for i,ev in enumerate(row['event']):
        if len(row['event']) == 1:
            pass
        if i != len(row['event']) :
            userdata["visit"].append(rev_keys[ev])
            userdata["time"].append(time_s)
            time_s+=random.randint(1,10)
    userdata["goal"].append(rev_keys[row['event'][-1]])

    data.append(userdata)


dataset_dict = {
    "keys" : keys,
    "data" : data
}

with open('./dataset.json', 'w') as json_file:
    json.dump(dataset_dict, json_file)
    


        



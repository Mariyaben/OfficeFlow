import openai
import os
import pandas as pd
import time
from dotenv import load_dotenv

# Loading the environment variable
load_dotenv()
openai.api_key = os.getenv('OPEN_AI_KEY')

set_of_preds = ["set up UPI","reset password"]

messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "system", "content": "Give 2 sentence questions to the user to suggest what he is searching for ?"},
        {"role": "system", "content": "Be formal, no salutations just questions"},
        {"role": "user", "content": "I am user of the state bank of India Application, I need help finding a feature"},
        {"role": "system", "content": "The User is searching either for {0} or {1} ".format(set_of_preds[0],set_of_preds[1])},
        {"role": "system", "content": "Give the user a  suggestion"},
        {"role": "user", "content": "What could I be possibly searching ? "},
    ]

def complete(messages,model="gpt-3.5-turbo"):
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0,
    )
    return response.choices[0].message["content"]

response = complete(messages)
print(response)
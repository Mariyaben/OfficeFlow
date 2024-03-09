import argparse
import json
from infer import run_usage_inference

def main():
    parser = argparse.ArgumentParser(description="A Python script that takes a single JSON argument.")
    parser.add_argument("argument", type=str, help="The JSON argument to be processed.")
    
    args = parser.parse_args()
    
    try:
        json_argument = json.loads(args.argument)
        # processed_argument = process_argument(json_argument)
        #print("Processed argument:", eval(json_argument['data']))

        data = {"data" : eval(json_argument['data'])[-2:] }
        
        # print(data)
        # with open('./test.json', 'w') as json_file:
        #     json.dump(json_argument, json_file, indent=4)
        last_three_items_preserved_format = {
            "data": data["data"][-4:]
        }
        out = run_usage_inference(
            last_three_items_preserved_format,
            r"C:\Users\91892\Desktop\HPAI_Banking_Assist\models\usage_assist\model.pt"
        )
        # print(out)
        for value in out.values():
            print(value)
    except json.JSONDecodeError as e:
        print("Error parsing JSON argument:", e)

# def process_argument(argument):
#     # Add your processing logic here
#     return argument

if __name__ == "__main__":
    main()

import argparse

def main():
    parser = argparse.ArgumentParser(description="A Python script that takes a single argument.")
    parser.add_argument("argument", type=str, help="The argument to be processed.")
    
    args = parser.parse_args()
    processed_argument = process_argument(args.argument)
    print("Processed argument:", processed_argument)

def process_argument(argument):
    # Add your processing logic here
    return argument

if __name__ == "__main__":
    main()

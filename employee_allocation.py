import openai
import streamlit as st
import pandas as pd

# Set your OpenAI API key
openai.api_key = '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'

# Provide the path to your CSV file
csv_file_path = 'C:/Users/HP/Desktop/officeflow/OfficeFlow/employee_data.csv'

# Read the CSV file into a DataFrame
df = pd.read_csv(csv_file_path)

# Check if DataFrame is not empty and has the 'Field' column
if not df.empty and 'Field' in df.columns:
    # Sidebar for user input
    st.sidebar.header("User Input for Project")
    required_field = st.sidebar.selectbox("Required Field", df['Field'].unique())
    required_experience = st.sidebar.slider("Minimum Experience", min_value=1, max_value=20, value=5)

    # Filter employees based on user input
    eligible_employees = df[(df['Field'] == required_field) & (df['Years_of_experience'] >= required_experience)]

    # Generate a prompt for OpenAI based on user input and employee data
    prompt = f"Allocate employees in the {required_field} field with at least {required_experience} years of experience to suitable projects."

    # Make a request to the OpenAI API
    response = openai.Completion.create(
        engine="gpt-3.5-turbo-instruct",  # Specify the appropriate GPT-3 engine
        prompt=prompt,
        max_tokens=500,  # Adjust based on the desired response length
    )

    # Parse the response and display in Streamlit
    if 'choices' in response and response['choices']:
        model_output = response['choices'][0]['text']
        st.header("Project Allocation Results")
        st.subheader("OpenAI Model Output:")
        st.write(model_output)
    else:
        st.error("Error making API request to OpenAI.")
else:
    st.error("DataFrame is empty or does not have the 'Field' column.")

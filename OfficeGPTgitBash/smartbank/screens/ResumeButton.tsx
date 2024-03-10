import React from 'react';
import { View, TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';

const ResumeButton = () => {
  // Function to handle opening the Streamlit application
  const openResumeScreeningApp = () => {
    // Replace 'YOUR_STREAMLIT_APP_URL' with the actual URL of your Streamlit app
    const streamlitAppUrl = 'http://localhost:8501/';
    
    // Open the URL in the device's default browser or web view
    Linking.openURL(streamlitAppUrl);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openResumeScreeningApp} style={styles.button}>
        <Text style={styles.buttonText}>Open Resume Screening App</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ResumeButton;

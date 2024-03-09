import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const UpdateKYCScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdateKYC = () => {
    // Implement your logic to update KYC information
    // You can send the data to a server, update the user's KYC status, or perform any other relevant actions.

    // For this example, we'll just log the updated KYC information.
    console.log('KYC Update Request:');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update KYC Information</Text>
      <Text style={styles.label}>Full Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        onChangeText={(text) => setFullName(text)}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Update KYC" onPress={handleUpdateKYC} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default UpdateKYCScreen;

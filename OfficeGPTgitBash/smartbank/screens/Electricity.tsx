import React, { useState } from 'react';
import { View, Text,TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";
const KeralaElectricityBoards = [
  'Kerala State Electricity Board (KSEB)',
  'Kerala State Electricity Board (KSEB) - LT Bill',
  'Kerala State Electricity Board (KSEB) - HT Bill',
  // Add more Kerala electricity boards here
];

const ElectricityPaymentScreen = () => {
  const [selectedBoard, setSelectedBoard] = useState(KeralaElectricityBoards[0]);
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    // Implement the payment functionality here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Electricity Payment</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Electricity Board:</Text>
        <Picker
          selectedValue={selectedBoard}
          onValueChange={(itemValue) => setSelectedBoard(itemValue)}
          style={styles.picker}
        >
          {KeralaElectricityBoards.map((board, index) => (
            <Picker.Item key={index} label={board} value={board} />
          ))}
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Amount to Pay:</Text>
        <TextInput
          style={styles.input}
          placeholder="Amount"
          value={amount}
          onChangeText={(text) => setAmount(text)}
          keyboardType="numeric"
        />
      </View>
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
});

export default ElectricityPaymentScreen;

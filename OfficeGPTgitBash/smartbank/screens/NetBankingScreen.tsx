// NetBankingScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const NetBankingScreen = () => {
  // You can include state and functions specific to this screen here.
  const netBankingAccounts = [
    {
      id: '1',
      accountNumber: '123456789',
      bankName: 'Example Bank',
      balance: '$5,000.00',
    },
    // Add more net banking account data as needed
  ];

  // Example function to handle selecting a bank account
  const handleAccountSelection = (account) => {
    // Implement the desired functionality here.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Net Banking Accounts</Text>
      <FlatList
        data={netBankingAccounts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleAccountSelection(item)}>
            <View style={styles.accountItem}>
              <Text style={styles.accountNumber}>{item.accountNumber}</Text>
              <Text style={styles.bankName}>{item.bankName}</Text>
              <Text style={styles.balance}>Balance: {item.balance}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  accountItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 16,
  },
  accountNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bankName: {
    fontSize: 16,
    color: 'gray',
  },
  balance: {
    fontSize: 16,
  },
});

export default NetBankingScreen;

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const remitMoneyData = [
  { id: '1', country: 'United States', description: 'Send money to the USA with ease.' },
  { id: '2', country: 'India', description: 'Effortlessly remit money to India for your loved ones.' },
  { id: '3', country: 'Canada', description: 'Send funds to Canada securely and quickly.' },
  { id: '4', country: 'United Kingdom', description: 'Remit money to the UK for various purposes.' },
  { id: '5', country: 'Australia', description: 'Transfer money to Australia with competitive rates.' },
  // Add more countries as needed
];

const RemitMoneyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remit Money Abroad</Text>
      <FlatList
        data={remitMoneyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.countryItem}>
            <Text style={styles.countryName}>{item.country}</Text>
            <Text style={styles.countryDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countryItem: {
    marginBottom: 20,
  },
  countryName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  countryDescription: {
    fontSize: 16,
  },
});

export default RemitMoneyScreen;

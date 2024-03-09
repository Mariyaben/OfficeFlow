import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const offeringsData = [
  { id: '1', title: 'Savings Account', description: 'Start saving with our high-interest savings accounts.' },
  { id: '2', title: 'Fixed Deposits', description: 'Invest your money with attractive fixed deposit options.' },
  { id: '3', title: 'Loans', description: 'Explore our loan products for various financial needs.' },
  { id: '4', title: 'Investments', description: 'Grow your wealth with our investment opportunities.' },
  { id: '5', title: 'Insurance', description: 'Protect your family and assets with our insurance plans.' },
  // Add more offerings as needed
];

const OfferingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Financial Offerings</Text>
      <FlatList
        data={offeringsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.offeringItem}>
            <Text style={styles.offeringTitle}>{item.title}</Text>
            <Text style={styles.offeringDescription}>{item.description}</Text>
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
  offeringItem: {
    marginBottom: 20,
  },
  offeringTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  offeringDescription: {
    fontSize: 16,
  },
});

export default OfferingsScreen;

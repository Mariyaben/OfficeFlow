import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DebitCardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Debit Card Services</Text>
      <Text style={styles.description}>
        Welcome to the Debit Card Services section. Here, you can manage your debit card and perform various actions.
      </Text>
      {/* Add your specific debit card-related content here */}
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
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  // Add additional styles as needed
});

export default DebitCardScreen;

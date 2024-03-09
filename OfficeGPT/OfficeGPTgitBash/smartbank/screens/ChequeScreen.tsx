import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChequeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cheque Book Services</Text>
      <Text style={styles.description}>
        Welcome to the Cheque Book Services section. Here, you can manage your cheque books and request new ones.
      </Text>
      {/* Add your specific cheque book-related content here */}
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

export default ChequeScreen;

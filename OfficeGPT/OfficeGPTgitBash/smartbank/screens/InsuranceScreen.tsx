// InsuranceScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const InsuranceScreen = () => {
  // You can include state and functions specific to this screen here.

  // Example function to handle a button press
  const handleButtonPress = () => {
    // Implement the desired functionality here.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insurance Information</Text>
      <Text style={styles.description}>
        This is where you can display insurance details and information.
      </Text>

      <Button
        title="Get a Quote"
        onPress={handleButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
});

export default InsuranceScreen;

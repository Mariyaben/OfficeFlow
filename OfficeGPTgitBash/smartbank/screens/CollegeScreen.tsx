import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CollegeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>College/School Fee Payment</Text>
      <Text style={styles.description}>
        Pay your college or school fees conveniently through our app and never miss a due date.
      </Text>
      {/* You can add more content and functionality related to fee payment here */}
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
  description: {
    fontSize: 18,
  },
});

export default CollegeScreen;

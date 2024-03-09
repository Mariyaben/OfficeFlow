import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LockerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Locker Availability</Text>
      <Text style={styles.description}>
        Check the availability of lockers at our branches and reserve one for your convenience.
      </Text>
      {/* You can add more content and functionality related to locker availability here */}
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

export default LockerScreen;

// FingerprintScreen.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';

export default function FingerprintScreen({ navigation }) {
  return (
    <View>
      <Text>Fingerprint Authentication</Text>
      {/* Add your fingerprint authentication UI here */}
      <Button
        title="Authenticate with Fingerprint"
        onPress={() => {
          // Implement your fingerprint authentication logic here
          const isFingerprintValid = true; // Replace with actual fingerprint check
          if (isFingerprintValid) {
            navigation.navigate('Home'); // Navigate to the home screen on successful fingerprint
          } else {
            // Handle fingerprint authentication failure
          }
        }}
      />
    </View>
  );
}

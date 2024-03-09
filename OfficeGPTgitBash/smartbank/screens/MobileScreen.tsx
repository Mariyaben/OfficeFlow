import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const MobileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Mobile Services</Text>
        <Text style={{ fontSize: 16, marginTop: 20 }}>
          Welcome to our mobile services screen. Here, you can access various features and services related to your mobile needs.
        </Text>
        <Text style={{ fontSize: 16, marginTop: 20 }}>
          Some of the services provided may include mobile recharges, bill payments, account management, and more. Explore the options to manage your mobile services conveniently.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MobileScreen;

import React from "react";
import { View, Text, Button } from "react-native";

export default function OnlinePaymentScreen({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Online Payment</Text>
      <Text style={{ marginVertical: 20 }}>
        Welcome to the Online Payment screen. 
      </Text>
      <Button title="Go Back" onPress={handleBack} />
    </View>
  );
}

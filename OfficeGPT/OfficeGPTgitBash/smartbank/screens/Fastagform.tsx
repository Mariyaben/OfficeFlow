import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const FASTagRechargeForm = ({ route }) => {
  const { selectedBank } = route.params; // Access the selected bank name

  const [vehicleNumber, setVehicleNumber] = useState('');

  const handleRecharge = () => {
    // Implement the recharge functionality here
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24 }}>Recharge FASTag</Text>
      <Text style={{ fontSize: 18, marginTop: 20 }}>
        Selected Bank: {selectedBank}
      </Text>
      <Text style={{ fontSize: 18, marginTop: 20 }}>
        Please enter Vehicle Number (linked with FASTag)
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          marginTop: 10,
          padding: 10,
        }}
        placeholder="E.g. ABC1234"
        value={vehicleNumber}
        onChangeText={(text) => setVehicleNumber(text)}
      />
      <Button title="Recharge" onPress={handleRecharge} color={"red"} />
    </View>
  );
};

export default FASTagRechargeForm;

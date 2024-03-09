import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';

const DTHOperators = [
  { name: 'Dish TV' },
  { name: 'Tata Sky' },
  { name: 'Airtel Digital TV' },
  { name: 'Videocon D2H' },
  { name: 'Sun Direct' },
  // Add more DTH operators here
];

const DTHRechargeScreen = () => {
  const [selectedOperator, setSelectedOperator] = useState(DTHOperators[0]);
  const [rechargeAmount, setRechargeAmount] = useState('');

  const handlePayment = () => {
    // Add your payment logic here, e.g., display an alert with the recharge details
    alert(`Recharge Amount: ${rechargeAmount}\nOperator: ${selectedOperator.name}`);
  };

  // Split DTHOperators into two rows
  const firstRow = DTHOperators.slice(0, DTHOperators.length / 2);
  const secondRow = DTHOperators.slice(DTHOperators.length / 2);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Select DTH Operator</Text>
      <View style={{ flexDirection: 'row' }}>
        <FlatList
          data={firstRow}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedOperator(item)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
                borderWidth: selectedOperator === item ? 2 : 0,
                borderColor: selectedOperator === item ? 'red' : 'transparent',
                borderRadius: 10,
              }}
            >
              {/* Add the operator's icon here if you have the images */}
              <Text style={{ marginLeft: 10 }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={secondRow}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedOperator(item)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
                borderWidth: selectedOperator === item ? 2 : 0,
                borderColor: selectedOperator === item ? 'red' : 'transparent',
                borderRadius: 10,
              }}
            >
              {/* Add the operator's icon here if you have the images */}
              <Text style={{ marginLeft: 10 }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Text style={{ fontSize: 20, marginTop: 20 }}>Selected Operator: {selectedOperator.name}</Text>
      <Text style={{ fontSize: 20, marginTop: 20 }}>Enter Recharge Amount:</Text>
      <TextInput
        style={{
          fontSize: 18,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 10,
          padding: 10,
          width: 200,
        }}
        value={rechargeAmount}
        onChangeText={text => setRechargeAmount(text)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
          width: 50,
        }}
        onPress={() => handlePayment()}
      >
        <Text style={{ fontSize: 18, color: 'white' }}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DTHRechargeScreen;

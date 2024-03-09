import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MainNavigationProps } from "../navigation/MainStack";

export default function BHIMUPIPage() {
  const navigation = useNavigation<MainNavigationProps>();

  // State to manage UPI ID and amount
  const [upiId, setUpiId] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const handleTransfer = () => {
    // Handle the transfer logic here
    // You can perform validation and initiate the transfer
  };

  return (
    <SafeAreaView className="flex-1 bg-neutral-50 pt-1 pb-7">
      <View className="h-11 w-full justify-center">
        <Pressable
          className="absolute top-0 left-0 h-11 w-11 items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          {/* Back button here */}
        </Pressable>
      </View>
      <View className="flex-1 px-4">
        <Text className="mt-1 text-[28px] font-bold text-[#132F38]">
          BHIM UPI Transfer
        </Text>
        <Text className="mt-2 text-[13px] font-medium text-neutral-600">
          Enter the UPI ID and amount to transfer.
        </Text>
        <View className="flex-1">
          <TextInput
            className="mt-4 h-12 w-full rounded-lg border-[1px] border-[#EAEAEA] bg-white px-2"
            placeholder="UPI ID"
            value={upiId}
            onChangeText={(text) => setUpiId(text)}
          />
          <TextInput
            className="mt-2 h-12 w-full rounded-lg border-[1px] border-[#EAEAEA] bg-white px-2"
            placeholder="Amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
          <Pressable
            style={{
              height: 40, // Set the desired height
              width: '40%', // Adjust the width (e.g., 10% of the parent)
              alignSelf: 'center', // Center horizontally within its parent
              alignItems: 'center', // Center vertically
              marginTop: 16, // Add top margin for spacing
              borderRadius: 20, // Adjust the rounded shape
              backgroundColor: 'red', // Use your desired background color
            }}
            onPress={handleTransfer}
          >
            <Text 
            style={{
              fontSize: 16, // Set the font size
              fontWeight: 'bold', // Bold font weight
              lineHeight: 40, // Line height as the same as the height
              color: 'white', // Text color
            }}
            >Transfer</Text>
          </Pressable>
          <Pressable
            style={{
              height: 40, // Set the desired height
              width: '40%', // Adjust the width (e.g., 10% of the parent)
              alignSelf: 'center', // Center horizontally within its parent
              alignItems: 'center', // Center vertically
              marginTop: 16, // Add top margin for spacing
              borderRadius: 20, // Adjust the rounded shape
              borderColor: 'black',// Add a black border
              borderWidth:1, // Specify the border width 
              backgroundColor: 'white', // Use your desired background color
            }}
            onPress={navigation.goBack}
          >
            <Text 
            style={{
              fontSize: 16, // Set the font size
              fontWeight: 'bold', // Bold font weight
              lineHeight: 40, // Line height as the same as the height
              color: 'black', // Text color
            }}
            >Back</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

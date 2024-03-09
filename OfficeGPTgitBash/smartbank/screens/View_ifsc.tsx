import React, { useState } from "react";
import { View, Text, TextInput, ScrollView ,Button} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { ImageBackground, Image } from "react-native";
const View_ifsc = () => {
  const [selectedState, setSelectedState] = useState("Select State");
  const [selectedBank, setSelectedBank] = useState("Select Bank");
  const [city, setCity] = useState("");
  const [branchName, setBranchName] = useState("");
  const ifscCode = "ABCD0123456"; // Replace with the actual IFSC code

  const handleSearch = () => {
    // You can use the selectedState, selectedBank, city, and branchName
    // to perform a search or display information based on the user's input.
    // This is where you can implement the logic to fetch and display results.
  };
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
      <Image
              style={{
                resizeMode: "contain",
                width: 200,
                height: 100,
                left: 10,
              }}
              source={require("../assets/sib.png")}
            />
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20,left:20
     }}>
          View IFSC Code
        </Text>
      
        <Text style={{ marginBottom: 10 }}>IFSC Code: {ifscCode}</Text>

        <Picker
          selectedValue={selectedState}
          onValueChange={(itemValue) => setSelectedState(itemValue)}
        >
          <Picker.Item label="Select State" value="Select State" />
          <Picker.Item label="State 1" value="State 1" />
          <Picker.Item label="State 2" value="State 2" />
          {/* Add more states as needed */}
        </Picker>

        <Picker
          selectedValue={selectedBank}
          onValueChange={(itemValue) => setSelectedBank(itemValue)}
        >
          <Picker.Item label="Select Bank" value="Select Bank" />
          <Picker.Item label="Bank 1" value="Bank 1" />
          <Picker.Item label="Bank 2" value="Bank 2" />
          {/* Add more banks as needed */}
        </Picker>

        <TextInput
          placeholder="City"
          value={city}
          onChangeText={(text) => setCity(text)}
          style={{ borderColor: "gray", borderWidth: 1, borderRadius: 5, marginBottom: 10, padding: 5 }}
        />

        <TextInput
          placeholder="Branch Name"
          value={branchName}
          onChangeText={(text) => setBranchName(text)}
          style={{ borderColor: "gray", borderWidth: 1, borderRadius: 5, marginBottom: 10, padding: 5 }}
        />
         <Button title="Search" onPress={handleSearch} />
      </View>
    </ScrollView>
  );
};

export default View_ifsc;
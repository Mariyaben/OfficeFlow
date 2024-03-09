import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const MoreInfoScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#dbe4f1" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>More Information</Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>
          This is the More Info Screen. Add your content here.
        </Text>
        {/* You can add more content, components, or actions as needed */}
      </View>
    </SafeAreaView>
  );
};

export default MoreInfoScreen;

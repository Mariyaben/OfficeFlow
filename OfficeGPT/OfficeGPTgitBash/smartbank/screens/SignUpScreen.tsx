import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { Picker } from "@react-native-picker/picker";
import { useEffect } from "react";
import { Image, TextInput } from "react-native"; // Import Picker
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

import { LoginNavigationProps } from "../navigation/LoginStack";
import { supabase } from "../supabase";
import { classNames } from "../utils/classNames";
import { trackEvent } from "../eventTracking/EventTracking";

const schema = z.object({
  phoneNumber: z.string().min(6).max(15), // Adjust validation rules as needed
  email: z.string().email(),
});

export default function SignUpScreen() {
  const navigation = useNavigation<LoginNavigationProps>();
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1"); // Initial country code
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { isSubmitting, isValid },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    setFocus("phoneNumber");
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white pt-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex-1 pb-7">
          <View className="h-11 w-full justify-center">
            <Pressable
              className="absolute top-0 left-0 h-11 w-11 items-center justify-center"
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="#2791B5" />
            </Pressable>
          </View>
          <View className="flex-1 px-4">
            <Image
              style={{
                resizeMode: "contain",
                width: 200,
                height: 100,
                left: 10,
              }}
              source={require("../assets/off.jpg")}
            />
            <Text className="mt-5 text-[34px] font-bold text-[#0C212C] text-center">
              Register
            </Text>
            <Text className="mt-2 text-[13px] font-medium text-neutral-600 text-center">
              Enter your details to sign in to Office-GPT.
            </Text>
            <Controller
  control={control}
  name="accountNumber" // Updated to accountNumber
  rules={{ required: true }}
  render={({ field: { onChange, value, ref } }) => (
    <TextInput
      className="mt-6 h-14 w-full rounded-xl border-[1px] border-[#E7EAEB] px-3.5"
      textContentType="none" // Updated to none
      keyboardType="numeric" // Updated to numeric
      placeholder="Name" // Updated label
      placeholderTextColor="#2B6173"
      editable={!isSubmitting}
      value={value}
      onChangeText={onChange}
      ref={ref}
    />
  )}
/>
<Controller
  control={control}
  name="phoneNumber" // Updated to phoneNumber
  rules={{ required: true }}
  render={({ field: { onChange, value, ref } }) => (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1, // Add a border
          borderColor: "#E7EAEB", // Border color
          borderRadius: 8,
          marginBottom: 10,// Add margin as needed
         
        }}
      >
        {/* Existing Picker for country code */}
        <Picker
          selectedValue={selectedCountryCode}
          onValueChange={(itemValue) => setSelectedCountryCode(itemValue)}
          style={{
            width: 100,
            height: 40,
          }}
        >
          <Picker.Item label="+1" value="+1" />
          <Picker.Item label="+44" value="+44" />
          <Picker.Item label="+91" value="+91" />
          {/* Add more country codes as needed */}
        </Picker>

        {/* TextInput for phone number */}
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: "#E7EAEB",
            borderRadius: 8,
            paddingLeft: 10,
          }}
          textContentType="telephoneNumber" // Updated to telephoneNumber
          keyboardType="phone-pad" // Use phone-pad keyboard for phone numbers
          placeholder="Phone Number"
          placeholderTextColor="#2B6173"
          editable={!isSubmitting}
          value={value}
          onChangeText={onChange}
          ref={ref}
        />
      </View>
    </View>
  )}
/>

            <Text className="mt-4 w-full text-center text-[13px] font-bold text-primary-500">
              {"Have an account? "}
              <Text
                onPress={() => navigation.navigate("Login")}
                style={{ color: "#FF0000" }}
                className="text-primary-400"
                
              >
                Log in here.
              </Text>
            </Text>
          </View>

          {/* <Image
  style={{
    resizeMode: "contain",
    width: 200,
    height: 200,
    alignSelf: "center",
    top:-10,
  }}
  source={require("../assets/r2.jpg")} // Update the image path
/> */}
          <View className="px-4">
            {/* <Text className="mt-4 mb-7 w-full text-center text-[11px] text-black">
              {"By registering, you accept our "}
              <Text className="font-bold text-primary-400"style={{ color: "#A52A2A" }}>
                Terms and Conditions
              </Text>
              {" and "}
              <Text className="font-bold text-primary-400" style={{ color: "#A52A2A" }}>
                Privacy Policy
              </Text>
              . Your data will be securely encrypted with TLS.
            </Text> */}
            
            <Pressable
  disabled={isSubmitting}
  style={({ pressed }) => [
    classNames(
      "h-12 w-full flex-row items-center justify-center space-x-2 rounded-xl",
      isValid ? "bg-primary-500" : "bg-neutral-200",
      pressed && { backgroundColor: "#FF0000" } // Change the background color when pressed
    ),
  ]}
  onPress={handleSubmit(async ({ phoneNumber }) => {
    const redirectURL = Linking.createURL("");

    const { error } = await supabase.auth.signIn(
      { phoneNumber },
      { redirectTo: redirectURL }
    );

    if (error) {
      Alert.alert("An error occurred", error.message, [{ text: "OK" }]);
      return;
    }

    navigation.navigate("ConfirmEmail", { phoneNumber });
  })}
>
  <Text
    style={{
      color: "rgb(255,0,0)", // Red color
      borderRadius: 8, // You can adjust the border radius as needed
    }}
    className={classNames(
      "text-[16px] font-bold",
      isValid ? "text-white" : "text-neutral-400"
    )}
  >
    Get OTP
  </Text>
  {isSubmitting && <ActivityIndicator />}
</Pressable>

          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
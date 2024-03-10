import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, Pressable, TextInput, KeyboardAvoidingView, Platform, Alert, ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { z, ZodError } from "zod";
import * as LocalAuthentication from 'expo-local-authentication';

import { LoginNavigationProps } from "../navigation/LoginStack";
import { zodResolver } from "@hookform/resolvers/zod";

// Define validation schema and other components
const schema = z.object({
  password: z.string().min(6),
});

export default function LoginScreen() {
  // Initialize navigation
  const navigation = useNavigation<LoginNavigationProps>();

  // Define state variables and form control
  const { control, handleSubmit, formState: { isSubmitting, isValid } } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const [isFingerprintAvailable, setIsFingerprintAvailable] = useState(false);

  // Check fingerprint availability on component mount
  useEffect(() => {
    async function checkFingerprintAvailability() {
      const isAvailable = await LocalAuthentication.hasHardwareAsync();
      setIsFingerprintAvailable(isAvailable);
    }
    checkFingerprintAvailability();
  }, []);

  // Handle fingerprint authentication
  const handleFingerprintAuth = async () => {
    // Logic for fingerprint authentication
  };

  // Handle form submission
  const onSubmit = async (data) => {
    // Logic for form submission
  };

  return (
    <ImageBackground
      source={require("../assets/off.jpg")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Sign in to Office-GPT</Text>
            <Pressable
              style={[styles.button, isValid ? styles.buttonEnabled : styles.buttonDisabled]}
              onPress={handleFingerprintAuth}
              disabled={!isFingerprintAvailable}
            >
              <Text style={styles.buttonText}>Fingerprint</Text>
              {isSubmitting && <ActivityIndicator size="small" color="#ffffff" />}
            </Pressable>
            <Text style={styles.orText}>OR enter your password:</Text>
            <Controller
              control={control}
              name="password"
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="#2B6173"
                  editable={!isSubmitting}
                />
              )}
            />
            <Pressable
              style={styles.loginButton} // Style for login button
              onPress={() => navigation.navigate("ConfirmEmail")} // Navigate to Dashboard screen on press
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
            <Pressable
              style={styles.signupButton}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.signupButtonText}>Don't have an account? Sign Up</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0C212C",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    borderRadius: 8,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginRight: 10,
  },
  buttonEnabled: {
    backgroundColor: "#2791B5",
  },
  buttonDisabled: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  orText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  input: {
    height: 50,
    width: "100%",
    borderRadius: 8,
    borderColor: "#E7EAEB",
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
    color: "#2B6173",
  },
  signupButton: {
    marginTop: 20,
  },
  signupButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2791B5",
  },

  loginButton: {
    marginTop: 20,
    backgroundColor: "#2791B5", // Button background color
    width: "100%", // Full width
    height: 50, // Set height
    borderRadius: 8, // Set border radius
    alignItems: "center", // Align items to center
    justifyContent: "center", // Justify content to center
  },

  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white", // Button text color
  },
});

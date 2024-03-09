import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const GetOTP: React.FC = () => {
  const [otp, setOTP] = useState('');

  const handleOTPChange = (text: string) => {
    setOTP(text);
  };

  const handleOTPSubmit = () => {
    // Handle OTP submission logic here, e.g., validate OTP or send it to a server.
    console.log('OTP submitted:', otp);
  };

  return (
    <View>
      <Text>Enter the OTP:</Text>
      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={handleOTPChange}
      />
      <Button title="Submit OTP" onPress={handleOTPSubmit} />
    </View>
  );
};

export default GetOTP;

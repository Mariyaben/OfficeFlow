// FeatureCard.js

import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FeatureCard({ icon, screenName }) {
  const navigation = useNavigation();

  const handleIconClick = () => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableWithoutFeedback onPress={handleIconClick}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: 10,
          width: '25%',
          height: '27%',
          marginBottom: 28.80,
        }}
      >
        <Ionicons name={icon.name} size={26} color="black" />
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>
          {icon.label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default FeatureCard;

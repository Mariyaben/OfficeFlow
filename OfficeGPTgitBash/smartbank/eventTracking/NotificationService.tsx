import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

const PersistentNotification = ({ message }) => {
  const moveAnimation = new Animated.Value(-400); // Initial position off the screen

  useEffect(() => {
    // Animate the notification's position from left to right
    Animated.timing(moveAnimation, {
      toValue: -2.0, // Final position
      duration: 3000, // Duration of the animation (adjust as needed)
      easing: Easing.linear,
      useNativeDriver: false, // Required for positioning
    }).start();

  }, []);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX: moveAnimation }] }]}>
      <Text style={styles.text}>
        {message} {/* Display the argument in place of "hi" */}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: 'rgba(255, 0, 0, 0.5)',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default PersistentNotification;

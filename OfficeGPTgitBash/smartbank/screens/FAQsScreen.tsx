import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const FAQs = () => {
  const faqData = [
    {
      question: 'What is the banks working hours?',
      answer: 'Our bank operates from 9 AM to 5 PM, Monday to Friday.',
    },
    {
      question: 'How can I check my account balance?',
      answer: 'You can check your account balance through our mobile app or by visiting an ATM.',
    },
    {
      question: 'Is online banking secure?',
      answer: 'Yes, our online banking system is highly secure and uses the latest encryption technology to protect your information.',
    },
    {
      question: 'How can I apply for a loan?',
      answer: 'You can apply for a loan by visiting one of our branches or by filling out an online application on our website.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      <FlatList
        data={faqData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.faqItem}>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.answer}>{item.answer}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 16,
  },
});

export default FAQs;

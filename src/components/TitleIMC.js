// Title.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = () => {
  return (
    <Text style={styles.title}>Calculadora de IMC</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Title;

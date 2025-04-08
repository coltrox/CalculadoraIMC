// ClassIMC.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Class = ({ imc }) => {
  // Verifica a classificação do IMC com base no valor informado
  let classificacao = '';

  if (imc < 18.5) classificacao = 'Abaixo do peso';
  else if (imc < 24.9) classificacao = 'Peso normal';
  else if (imc < 29.9) classificacao = 'Sobrepeso';
  else if (imc < 34.9) classificacao = 'Obesidade grau 1';
  else if (imc < 39.9) classificacao = 'Obesidade grau 2';
  else classificacao = 'Obesidade grau 3';

  return <Text style={styles.text}>Classificação: {classificacao}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    color: '#666',
  },
});

export default Class;
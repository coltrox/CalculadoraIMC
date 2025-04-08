// PesoIdealIMC.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PesoIdeal = ({ altura }) => {
  // Aqui converte a altura de centimetross para metros
  const alturaMetros = parseFloat(altura) / 100;
  // calcula o peso ideal mínimo e máximo com base na faixa de IMC considerada normal
  const pesoMinimo = (18.5 * alturaMetros ** 2).toFixed(1);
  const pesoMaximo = (24.9 * alturaMetros ** 2).toFixed(1);

  return (
    <Text style={styles.text}>
      Peso ideal: entre {pesoMinimo} kg e {pesoMaximo} kg
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: '#555',
  },
});

export default PesoIdeal;

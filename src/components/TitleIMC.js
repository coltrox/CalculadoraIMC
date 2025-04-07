import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from './src/components/Title'; // importa o componente

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

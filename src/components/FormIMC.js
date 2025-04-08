// FormIMC.js
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import Class from './ClassIMC';
import PesoIdeal from './PesoIdealIMC';
import { useState } from 'react';

const FormIMC = () => {
  const [peso, setPeso] = useState(''); // Estado para armazenar o peso
  const [altura, setAltura] = useState(''); // Estado para armazenar a altura
  const [imc, setImc] = useState(null); // Estado para armazenar o IMC calculado

  const calcularIMC = () => {
    // Converte a altura para metros e o peso para número
    const alturaMetros = parseFloat(altura) / 100;
    const pesoKg = parseFloat(peso);
    // Calcula o IMC usando a fórmula: peso / (altura * altura)
    const resultado = (pesoKg / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(resultado); // Atualiza o estado com o IMC calculado
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />

      {/* Exibe os componentes com base no IMC calculado */}
      {imc && (
        <>
          <Result imc={imc} />
          <Class imc={imc} />
          <PesoIdeal altura={altura} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});

export default FormIMC;
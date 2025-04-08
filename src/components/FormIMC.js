// FormIMC.js
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './ResultIMC';
import Class from './ClassIMC';
import PesoIdeal from './PesoIdealIMC';
import { useState } from 'react';

const FormIMC = () => {
  const [peso, setPeso] = useState(''); // armazenar o peso
  const [altura, setAltura] = useState(''); // armazenar a altura
  const [imc, setImc] = useState(null); // armazenar o IMC calculado

  const calcularIMC = () => {
    // Aqui converte a altura para metros e o peso para número
    const alturaMetros = parseFloat(altura) / 100;
    const pesoKg = parseFloat(peso);
    // calcula o IMC usando a fórmula: peso divididido (altura * altura)
    const resultado = (pesoKg / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(resultado); // atualiza com o IMC calculado
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
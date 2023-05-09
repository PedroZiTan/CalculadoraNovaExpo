import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

 function App() {
  const [operacao, setOperacao] = useState(0);
  const [valor1, setValor1] = useState('0');
  const [valor2, setValor2] = useState('0');
  const [resultado, setResultado] = useState('0');

  function calcular(operacao, valor1, valor2) {
    let resultado;
    switch (operacao) {
      case '+':
        resultado = parseFloat(valor1) + parseFloat(valor2);
        break;
      case '-':
        resultado = parseFloat(valor1) - parseFloat(valor2);
        break;
      case '*':
        resultado = parseFloat(valor1) * parseFloat(valor2);
        break;
      case '/':
        resultado = parseFloat(valor1) / parseFloat(valor2);
        break;
    }

    

    return resultado;
  }
  
  
  function calcularResultado() {
    const res = calcular(operacao, valor1, valor2);
    setResultado(res.toString());
  }

  return (
    <View style={styles.centro}>
      <Text>Operação:</Text>
      <Picker 
        style={styles.dropdown}
        selectedValue={operacao}
        onValueChange={(itemValue, itemIndex) => setOperacao(itemValue)}>
        <Picker.Item label="+" value="+" />
        <Picker.Item label="-" value="-" />
        <Picker.Item label="*" value="*" />
        <Picker.Item label="/" value="/" />
      </Picker>
      <Text>Valor 1:</Text>
      <TextInput  style={styles.table}
        keyboardType="numeric"
        onChangeText={(valor) => setValor1(valor)}
        value={valor1}
      />
      <Text>Valor 2:</Text>
      <TextInput  style={styles.table}
        keyboardType="numeric"
        onChangeText={(valor) => setValor2(valor)}
        value={valor2}
      />
      <View style={{padding: 20}}>
      <Button title="Calcular"   onPress={calcularResultado} />   
      </View>
      
      <Text>Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00aff5"
  },
  dropdown: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
  }
})

export default App
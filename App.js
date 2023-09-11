import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const App = () => {
  const [brl, setBrl] = useState(null);
  const [jsonTexto, setJsonTexto] = useState('');

// Leitura do Arquivo JSON em 'arqMoedas.json'.
  const leituraArquivoJSON = async () => {
    try {
      const arquivoJSON = JSON.parse(jsonTexto);
      const valorBrl = arquivoJSON.usd.brl
      setBrl(valorBrl);
    } catch (erro) {
      Alert.alert('Erro no JSON inserido.');
    }
  };

// Aplicação programada para leitura do JSON alocado.
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cotações:</Text>
      <TextInput
        style={styles.input}
        multiline={true}
        onChangeText={(text) => setJsonTexto(text)}/>
      <Button title="USD --> BRL" onPress={leituraArquivoJSON} />
      {brl && (
        <Text style={styles.result}>
          R$ {brl}
        </Text>
      )}
    </View>
  );
};


// Estilização.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  header: {
    textAlign: 'left',
    fontSize: 24,
    marginBottom: 10,
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 8,
  },

  result: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default App;

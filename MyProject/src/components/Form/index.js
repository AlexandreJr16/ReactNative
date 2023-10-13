import React from "react";
import ResultImc from "./ResultImc/index";
import { View, StyleSheet, TextInput, Text, Button } from "react-native";
import { useState } from "react";
import styles from "./style";

const Form = () => {
  const [messageImc, setMessageImc] = useState("");
  const [resultImc, setResultImc] = useState(0);
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const handleAltura = (text) => {
    setAltura(text);
  };
  const handlePeso = (text) => {
    setPeso(text);
  };
  const handleImc = () => {
    const alturaFloat = parseFloat(altura);
    const pesoFloat = parseFloat(peso);

    const result = pesoFloat / (alturaFloat * alturaFloat);

    if (isNaN(altura) ?? isNaN(peso)) {
      setMessageImc("Houve algum erro");
      setResultImc("");
      return;
    }

    setResultImc(Math.round(result));
    if (result < 18.5) setMessageImc("Baixo Peso");
    else if (result < 24.99) setMessageImc("Normal");
    else if (result < 29.99) setMessageImc("Sobrepeso");
    else setMessageImc("Obesidade");
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Altura</Text>
        <TextInput
          placeholder="1.80"
          keyboardType="numeric"
          value={altura}
          onChangeText={handleAltura}
          style={styles.input}
        />
        <Text style={styles.label}>Peso</Text>
        <TextInput
          placeholder="80"
          keyboardType="numeric"
          onChangeText={handlePeso}
          value={peso}
          style={styles.input}
        />

        <Button title="Calcular o IMC" onPress={handleImc} />
      </View>
      <ResultImc messageImc={messageImc} resultImc={resultImc} />
    </View>
  );
};

export default Form;

import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const Form = () => {
  return (
    <View>
      <Text>Altura</Text>
      <TextInput placeholder="1.90" keyboardType="numeric" />
      <Text>Peso</Text>
      <TextInput placeholder="80" keyboardType="numeric" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Form;

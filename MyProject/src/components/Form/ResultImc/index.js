import React from "react";
import { StyleSheet, View, Text } from "react-native";
import styles from "./styles";
const ResultImc = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{props.resultImc}</Text>
      <Text style={styles.txt}>{props.messageImc}</Text>
    </View>
  );
};

export default ResultImc;

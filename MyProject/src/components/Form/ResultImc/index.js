import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ResultImc = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{props.resultImc}</Text>
      <Text style={styles.txt}>{props.messageImc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    fontWeight: "600",
  },
});
export default ResultImc;

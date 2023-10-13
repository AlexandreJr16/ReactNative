import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.boldtext}>Você está saudável?</Text>
    </View>
  );
};

export default Title;

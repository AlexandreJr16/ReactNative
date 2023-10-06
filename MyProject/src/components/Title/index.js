import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = () => {
  return (
    <View>
      <Text style={styles.boldtext}>Você está saudável?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boldtext: {
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default Title;

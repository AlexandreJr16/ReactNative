import { StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title/index";
import Main from "./src/components/Main/index";
import Form from "./src/components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },
});

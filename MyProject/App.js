import { StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title/index";
import Form from "./src/components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <Title style={styles.title} />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
});

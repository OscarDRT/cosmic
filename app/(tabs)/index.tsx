import { StyleSheet } from "react-native";
import { Container } from "../../components/Container";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Header } from "../../components/Header";
import { Text, View } from "../../components/Themed";

export default function TabOneScreen() {
  return (
    <Container edges={[]}>
      <Header />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Route from "./src";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

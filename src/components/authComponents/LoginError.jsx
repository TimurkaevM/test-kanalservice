import { StyleSheet, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const LoginError = () => {
  const { error } = useSelector((state) => state.authReducer);

  return error && <Text style={styles.textError}>{error}</Text>;
};

export default LoginError;

const styles = StyleSheet.create({
  textError: {
    color: "red",
  },
});

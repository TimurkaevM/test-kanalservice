import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../misc/colors";

const AuthButton = ({ handleClick }) => {
  return (
    <TouchableOpacity style={styles.btn} title="Pick an auth" onPress={handleClick}>
      <Text style={styles.btnText}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 213,
    height: 43,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.ORANGE,
    marginBottom: 15,
    marginTop: 10,
    borderRadius: 15,
  },
  btnText: {
    textAlign: "center",
    color: colors.BLACK,
    fontSize: 24,
    fontWeight: "800",
  },
});

export default AuthButton;

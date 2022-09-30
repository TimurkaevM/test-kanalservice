import { StyleSheet, Text, TextInput, Dimensions, View } from "react-native";
import React from "react";
import { colors } from "../../misc/colors";

const CostumeInput = ({ title, value, setValue, handleChange, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        onChange={handleChange}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    flexDirection: width < 500 ? "column" : "row",
  },
  title: {
    width: width < 500 ? 213 : 120,
    textAlign: "left",
    fontWeight: "400",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: width < 500 ? 15 : 0,
    color: colors.BLACK,
  },

  input: {
    width: width < 500 ? 213 : 295,
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: "#d9d9d9",
    color: colors.BLUE,
    fontSize: 13,
    borderWidth: 3,
    borderColor: colors.BLUE,
  },
});

export default CostumeInput;

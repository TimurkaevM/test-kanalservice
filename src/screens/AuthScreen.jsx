import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import StatusBarPlaceHolder from "../misc/StatusBarPlaceHolder";
import Header from "../misc/Header";
import { colors } from "../misc/colors";
import CostumeInput from "../components/authComponents/CostumeInput";
import { useDispatch, useSelector } from "react-redux";
import { changeError, onLogin } from "../redux/slices/authSlice";
import AuthButton from "../components/authComponents/AuthButton";
import LoginError from "../components/authComponents/LoginError";

const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.authReducer);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = () => {
    if (error) {
      dispatch(changeError());
      return;
    }
    return;
  };

  const handlePush = () => {
    navigation.navigate("Content");
  };

  const handleLogin = () => {
    dispatch(onLogin({ login, password, handlePush }));
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <StatusBarPlaceHolder />
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.authContainer}>
          <Text style={styles.authTitle}>Autorization</Text>
          <CostumeInput
            title="login"
            value={login}
            handleChange={handleChange}
            setValue={setLogin}
            secureTextEntry={false}
          />
          <CostumeInput
            title="password"
            value={password}
            handleChange={handleChange}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <AuthButton handleClick={handleLogin} />
          <LoginError />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  keyboard: {
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  authContainer: {
    width: width > 500 ? 480 : width - 20,
    paddingVertical: 32,
    paddingHorizontal: 35,
    borderWidth: 4,
    borderColor: colors.BLUE,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  authTitle: {
    color: colors.BLUE,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 15,
  },
});

export default AuthScreen;

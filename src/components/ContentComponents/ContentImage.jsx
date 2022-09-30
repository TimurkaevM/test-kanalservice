import { Dimensions, StyleSheet, Image, ActivityIndicator, View } from "react-native";
import React from "react";
import { colors } from "../../misc/colors";

const width = Dimensions.get("window").width;

const ContentImage = ({ photos, loading }) => {
  if (width < 700) return null;

  if (loading) {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size={50} color="#4686cc" />
      </View>
    );
  }

  return (
    <Image
      style={{
        backgroundColor: "red",
        marginBottom: 30,
        width: 150,
        height: 150,
      }}
      source={{
        uri: photos?.thumbnailUrl,
      }}
    />
  );
};

export default ContentImage;

const styles = StyleSheet.create({
  preloader: {
    width: 150,
    height: 150,
    marginVertical: 20,
    borderWidth: 4,
    borderColor: colors.BLUE,
    justifyContent: "center",
    alignItems: "center",
  },
});

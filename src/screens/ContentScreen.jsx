import { ActivityIndicator, Dimensions, FlatList, StyleSheet, View } from "react-native";
import StatusBarPlaceHolder from "../misc/StatusBarPlaceHolder";
import Header from "../misc/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../redux/slices/usersSlice";
import ContentItem from "../components/ContentComponents/ContentItem";

const width = Dimensions.get("window").width;

const ContentScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { navigate } = navigation;

  const { users, loading } = useSelector((state) => state.usersReducer);

  const renderItem = ({ item }) => {
    return <ContentItem item={item} />;
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <StatusBarPlaceHolder />
      <Header navigate={navigate} />
      <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}>
        {loading ? (
          <View style={styles.preloader}>
            <ActivityIndicator size={50} color="#4686cc" />
          </View>
        ) : (
          <FlatList
            horizontal={false}
            numColumns={width > 700 ? 2 : 1}
            data={users}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  preloader: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ContentScreen;

import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { colors } from "../../misc/colors";
import { api } from "../../api/api";
import ContentImage from "./ContentImage";
import React from "react";

const width = Dimensions.get("window").width;

const ContentItem = ({ item }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [albums, setAlbums] = useState({});
  const [photos, setPhotos] = useState({});
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [loadingPhotos, setLoadingPhotos] = useState(false);

  const { id, name, company } = item;
  const companyName = company.name;

  const countId = id === 1 ? "" : id - 1;

  const fetchPosts = async () => {
    try {
      setLoadingPosts(true);
      const posts = await api.get(`users/${id}/posts/?id=${countId}1`);

      setTitle(posts.data[0].title);
      setBody(posts.data[0].body);
      setLoadingPosts(false);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchAlbums = async () => {
    try {
      setLoadingPhotos(true);
      const albumsServer = await api
        .get(`users/${id}/albums/?id=${countId}1`)
        .then((response) => api.get(`albums/${response.data[0].id}/photos`))
        .then((photos) => {
          setPhotos(photos.data[0]);
          setLoadingPhotos(false);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (width > 600) {
      fetchAlbums();
    }
    fetchPosts();
  }, []);

  return loadingPosts ? (
    <View style={styles.preloader}>
      <ActivityIndicator size={50} color="#4686cc" />
    </View>
  ) : (
    <View style={styles.card}>
      <ContentImage photos={photos} loading={loadingPhotos} />
      <Text style={styles.cardText}>Author: {name}</Text>
      <Text style={styles.cardText}>Company: {companyName}</Text>
      <Text style={styles.cardText}>Title: {title}</Text>
      {width > 700 ? (
        <Text numberOfLines={4} style={styles.cardText}>
          {body}
        </Text>
      ) : null}
    </View>
  );
};

const cardDimensions = {
  cardWidth: width - 40,
  cardHeight: 200,
  cardTitleSize: 16,
};

function getCardDimensions() {
  if (width > 700) {
    cardDimensions.cardHeight = 470;
    cardDimensions.cardWidth = 325;
    cardDimensions.cardTitleSize = 14;
    return cardDimensions;
  }
  return cardDimensions;
}

const styles = StyleSheet.create({
  preloader: {
    width: getCardDimensions().cardWidth,
    height: getCardDimensions().cardHeight,
    marginVertical: 20,
    marginHorizontal: 15,
    borderWidth: 4,
    borderColor: colors.BLUE,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: getCardDimensions().cardWidth,
    height: getCardDimensions().cardHeight,
    marginVertical: 20,
    marginHorizontal: 15,
    borderWidth: 4,
    borderColor: colors.BLUE,
    paddingHorizontal: 17,
    paddingVertical: 12,
  },

  cardText: {
    textAlign: "left",
    fontSize: getCardDimensions().cardTitleSize,
    fontWeight: "800",
    marginBottom: 17,
    color: "#000",
  },

  cardMedia: {
    width: "100%",
    height: getCardDimensions().cardHeight,
    borderRadius: 20,
    shadowColor: "#000",
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  cardItem: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default React.memo(ContentItem);

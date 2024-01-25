import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";
import StyledTextInput from "../components/StyledTextInput";
import StyledButton from "../components/StyledButton";
import HeartIcon from "../icons/HeartIcon";

const HomeScreen: React.FC = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    const isSignedIn = await signIn(token as string);
    if (isSignedIn) {
      navigation.navigate("Home" as never);
    }
  };

  useEffect(() => {
    if (token) {
      navigation.navigate("Home" as never);
    }
  }, []);

  const popularDataList = [
    {
      id: "1",
      imageUrl: "../../assets/Rectangle992.png",
      title: "Alley Palace",
      rating: 4.5,
    },
    {
      id: "2",
      imageUrl: "../../assets/Rectangle992.png",
      title: "Coeurdes Alpes",
      rating: 3.8,
    },
  ];

  const PopularListItem = ({ imageUrl, title, rating }: any) => {
    return (
      <View style={listItemStyles.container}>
        <Image source={{ uri: imageUrl }} style={listItemStyles.image} />
        <View style={listItemStyles.titleContainer}>
          <Text style={listItemStyles.title}>{title}</Text>
        </View>
        <View style={listItemStyles.ratingContainer}>
          <Text style={listItemStyles.rating}>{rating}</Text>
        </View>
        <HeartIcon style={listItemStyles.icon} />
      </View>
    );
  };

  const PopularList = () => {
    return (
      <View>
        <FlatList
          data={popularDataList}
          horizontal
          renderItem={({ item }) => (
            <PopularListItem
              imageUrl={item.imageUrl}
              title={item.title}
              rating={item.rating}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.innerHeaderContainer}>
          <Text style={styles.headerSubText}>Explore</Text>
          <Text style={styles.headerSubText}>Aspen, USA</Text>
        </View>
        <Text style={styles.headerText}>Aspen</Text>
      </View>
      <View style={styles.searchContainer}>
        <StyledTextInput
          placeholder="Find things to do"
          onChangeText={(token) => {
            setToken(token);
          }}
          inputStyles={styles.searchInput}
        />
      </View>
      <View style={styles.categoryContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.chosenCategoryButton}
            onPress={() => {}}
          >
            <Text style={styles.chosenCategoryText}>Location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton} onPress={() => {}}>
            <Text style={styles.categoryText}>Hotels</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton} onPress={() => {}}>
            <Text style={styles.categoryText}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton} onPress={() => {}}>
            <Text style={styles.categoryText}>Adventure</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton} onPress={() => {}}>
            <Text style={styles.categoryText}>Something else</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.popularContainer}>
            <View style={styles.popularHeaderContainer}>
              <Text style={styles.popularHeaderText}>Popular</Text>
              <Text style={styles.text}>See all</Text>
            </View>
            <PopularList></PopularList>
          </View>
          <View style={styles.recommendedContainer}>
            <View style={styles.recommendedHeaderContainer}>
              <Text style={styles.popularHeaderText}>Recommended</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            ></ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headerContainer: {
    justifyContent: "space-between",
    paddingTop: 44,
    marginBottom: 24,
  },
  innerHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    marginBottom: 32,
  },
  categoryContainer: {
    marginBottom: 32,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  popularContainer: {
    justifyContent: "center",
  },
  popularHeaderContainer: {
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recommendedContainer: {
    justifyContent: "center",
  },
  recommendedHeaderContainer: {
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginBottom: 24,
  },
  chosenCategoryButton: {},
  categoryButton: {
    marginLeft: 28,
  },
  searchInput: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  text: {
    color: "#176FF2",
    fontSize: 12,
    textAlignVertical: "center",
    fontFamily: "Montserrat-SemiBold",
  },
  headerText: {
    color: "black",
    fontSize: 32,
    fontFamily: "Montserrat-SemiBold",
  },
  headerSubText: {
    color: "black",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
  },
  categoryText: {
    color: "#B8B8B8",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
  },
  chosenCategoryText: {
    color: "#176FF2",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },
  popularHeaderText: {
    color: "black",
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    alignContent: "center",
  },
});

const listItemStyles = StyleSheet.create({
  container: {
    width: 188,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
    marginBottom: 5,
  },
  titleContainer: {
    borderRadius: 100,
    position: "absolute",
    bottom: 46,
    left: 12,
    backgroundColor: "#4D5652",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  title: {
    color: "white",
    fontSize: 12,
    fontFamily: "Montserrat-SemiBold",
  },
  ratingContainer: {
    borderRadius: 100,

    position: "absolute",
    bottom: 12,
    left: 12,
    backgroundColor: "#4D5652",
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  rating: {
    color: "white",
    fontSize: 10,
    fontFamily: "Montserrat-SemiBold",
  },
  icon: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});

export default HomeScreen;

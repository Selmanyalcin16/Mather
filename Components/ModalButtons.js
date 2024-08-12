import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Entypo, FontAwesome5, Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const width_proportion2 = "100%";
const height_proportion2 = "150%";

export default function Header(props) {
  const navigation = useNavigation();

  async function modal() {
    navigation.navigate("Home");
  }
  async function reload() {
    await AsyncStorage.setItem("Reload", "true");
  }

  return <View></View>;
}

const styles = StyleSheet.create({
  Header: {
    display: "flex",
    paddingTop: "8%",
    backgroundColor: "white",
    flex: 0.1,
    marginTop: "5%",
    paddingLeft: "13%",
    paddingRight: "13%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  Text: {
    fontSize: 20,
    color: "black",
    marginLeft: "3%",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  Button: {
    flex: 4,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#32de84",
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "2.5%",
    borderRadius: 10,
    marginTop: "8%",
    width: "300%",
    height: "300%",
  },
});

import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Entypo, FontAwesome5, Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const width_proportion2 = "100%";
const height_proportion2 = "150%";

export default function Header(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.Header}>
      <View style={[styles.Button]}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Entypo name="home" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <View style={[styles.Button]}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Random Game")}
        >
          <Ionicons name="reload" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    display: "flex",
    paddingTop: "8%",
    backgroundColor: "white",
    flex: 0.2,
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
    width: width_proportion2,
    height: height_proportion2,
  },
});

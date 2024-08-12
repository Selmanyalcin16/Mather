import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Entypo, FontAwesome5, Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function Header(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.Nav}>
      <TouchableOpacity
        style={{ flex: 2 }}
        onPress={() => navigation.navigate("Random Game")}
      >
        <LinearGradient
          style={styles.NavBox}
          start={{ x: 0, y: 0 }}
          end={{ x: 2, y: 2 }}
          colors={["#32de84", "#32de84"]}
        >
          <FontAwesome5 name="dice" size={35} color="white" />
          <Text style={styles.Text}>Random Game</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 2 }}
        onPress={() => navigation.navigate("Daily")}
      >
        <LinearGradient
          style={styles.NavBox}
          start={{ x: 0, y: 0 }}
          end={{ x: 2, y: 2 }}
          colors={["#32de84", "#32de84"]}
        >
          <Entypo name="calendar" size={35} color="white" />
          <Text style={styles.Text}>Daily Challenge</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 2 }}
        onPress={() => navigation.navigate("Multiplayer")}
      >
        <LinearGradient
          style={styles.NavBox}
          start={{ x: 0, y: 0 }}
          end={{ x: 2, y: 2 }}
          colors={["#32de84", "#32de84"]}
        >
          <FontAwesome5 name="user-friends" size={35} color="white" />
          <Text style={styles.Text}>Multiplayer</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    display: "flex",
    paddingTop: "8%",
    backgroundColor: "white",
    flex: 0.25,
    paddingLeft: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  Text: {
    fontSize: 22,
    color: "white",
    marginLeft: "3%",
    fontFamily: "Roboto",
  },
  Nav: {
    flex: 3,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    paddingLeft: "7%",
    paddingRight: "7%",
  },
  NavBox: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#8c00a1",
    borderRadius: 15,
    marginTop: "5%",
    marginBottom: "5%",
    alignItems: "center",
    paddingLeft: "7%",
  },
});

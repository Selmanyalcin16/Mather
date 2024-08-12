import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Entypo, FontAwesome5, Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from "expo-ads-admob";
import React from "react";

// or ES6+ destructured imports
import Nav from "../Components/Nav";
import { useEffect } from "react";
import Game from "./Game";
const GameKey = "GamesPlayed";
const WinKey = "GamesWon";
const LostKey = "GamesLost";
const CupKey = "Cups";
// Set global test device ID

export default function App() {
  const [game, Setgame] = useState("0");
  const [win, Setwin] = useState("0");
  const [lost, Setlost] = useState("0");
  const [cup, Setcup] = useState("0");

  useEffect(async () => {
    console.log("Home Page");
    const Game = await AsyncStorage.getItem(GameKey);
    const Win = await AsyncStorage.getItem(WinKey);
    const Lose = await AsyncStorage.getItem(LostKey);
    const Cup = await AsyncStorage.getItem(CupKey);
    console.log(Game, Win, Lose, Cup);
    if (Game == null || Win == null || Lose == null || Cup == null) {
      await AsyncStorage.setItem(GameKey, "0");
      await AsyncStorage.setItem(WinKey, "0");
      await AsyncStorage.setItem(LostKey, "0");
      await AsyncStorage.setItem(CupKey, "0");
    }
    Setgame(Game);
    Setwin(Win);
    Setlost(Lose);
    Setcup(Cup);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> DATA:</Text>
      <View style={styles.Header}></View>
      <View style={styles.Logo}>
        <MaskedView
          maskElement={
            <Text
              style={[
                styles.Text,
                { backgroundColor: "transparent", fontSize: 60 },
              ]}
            >
              Mather
            </Text>
          }
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 2, y: 2 }}
            colors={["#32de84", "#32de84"]}
          >
            <Text style={{ opacity: 0, fontSize: 60 }}>Matherr</Text>
          </LinearGradient>
        </MaskedView>
      </View>
      <View style={styles.StatBoxes}>
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View style={styles.StatBox}>
            <Text style={styles.Numbers}>{game}</Text>
            <Text style={styles.StatText}>Games Played</Text>
          </View>
          <View style={styles.StatBox}>
            <Text style={styles.Numbers}>{win}</Text>
            <Text style={styles.StatText}>Games Won</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View style={styles.StatBox}>
            <Text style={styles.Numbers}>{lost}</Text>
            <Text style={styles.StatText}>Games Lost</Text>
          </View>
          <View style={styles.StatBox}>
            <Text style={styles.Numbers}>{cup}</Text>
            <Text style={styles.StatText}>Cups</Text>
          </View>
        </View>
      </View>
      <Nav />
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  bottomBanner: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  Header: {
    display: "flex",
    paddingTop: "8%",
    backgroundColor: "white",
    flex: 0.4,
    paddingRight: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
  Logo: {
    display: "flex",
    flexDirection: "row",
    flex: 0.6,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  StatBoxes: {
    flex: 2.5,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: "2%",
  },
  StatBox: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
    margin: "2.5%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
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
  Ad: {
    flex: 0.8,

    backgroundColor: "blue",
  },
  Text: {
    fontSize: 22,
    color: "white",
    marginLeft: "3%",
    fontFamily: "Roboto",
  },
  StatText: {
    color: "black",
    fontSize: 15,
  },
  Numbers: {
    fontSize: 38,
    color: "#32de84",
  },
});

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
import Header from "../Components/Header";
// or ES6+ destructured imports

import { MaskedViewBase } from "@react-native-masked-view/masked-view";

// Set global test device ID

export default function App() {
  const navigation = useNavigation();
  const [width, setwidth] = useState(10);
  AsyncStorage.setItem("Selman", "A1");
  console.log(AsyncStorage.getItem("Selman"));
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={32} color="black" />

          <Text style={styles.Text}>Daily Challenge</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Text style={styles.Text2}>Coming Soon!</Text>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Text2: {
    fontSize: 32,
    color: "#32de84",
    alignSelf: "center",
    marginTop: "10%",
  },
  Header: {
    display: "flex",
    paddingTop: "6%",
    backgroundColor: "white",
    flex: 0.1,
    paddingLeft: "5%",
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
});

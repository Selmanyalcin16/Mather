import AsyncStorage from "@react-native-async-storage/async-storage";

export async function lost() {
  const Games = await AsyncStorage.getItem("GamesPlayed");
  const Wins = await AsyncStorage.getItem("GamesLost");
  const cups = await AsyncStorage.getItem("Cups");
  await AsyncStorage.setItem("GamesPlayed", (parseInt(Games) + 1).toString());
  await AsyncStorage.setItem("GamesLost", (parseInt(Wins) + 1).toString());
  await AsyncStorage.setItem("Cups", (parseInt(cups) - 10).toString());
  console.log(Games, Wins, cups);
}

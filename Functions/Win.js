import AsyncStorage from "@react-native-async-storage/async-storage";

export async function win() {
  console.log("winnn");
  const Games = await AsyncStorage.getItem("GamesPlayed");
  const Wins = await AsyncStorage.getItem("GamesWon");
  const cups = await AsyncStorage.getItem("Cups");
  await AsyncStorage.setItem("GamesPlayed", (parseInt(Games) + 1).toString());
  await AsyncStorage.setItem("GamesWon", (parseInt(Wins) + 1).toString());
  await AsyncStorage.setItem("Cups", (parseInt(cups) + 10).toString());
  console.log("WinValues", Games, Wins, cups);
}

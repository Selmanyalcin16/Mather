import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Pages/Home";
import GameOffline from "./Pages/Game";
import Multiplayer from "./Pages/Multiplayer";
import Daily from "./Pages/Daily";
import Game2 from "./Pages/Game2";
import Home2 from "./Pages/Home2";

function HomeScreen({ navigation }) {
  return <Home />;
}

function GameOfflineMode({ navigation }) {
  return <GameOffline />;
}

function MultiplayerPage({ navigation }) {
  return <Multiplayer />;
}

function DailyPage({ navigation }) {
  return <Daily />;
}

function Game2Page({ navigation }) {
  return <Game2 />;
}

function Home2Screen({ navigation }) {
  return <Home2 />;
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Random Game" component={GameOfflineMode} />
      <Stack.Screen name="Multiplayer" component={MultiplayerPage} />
      <Stack.Screen name="Daily" component={DailyPage} />
      <Stack.Screen name="Game2" component={Game2Page} />
      <Stack.Screen name="Home2" component={Home2Screen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

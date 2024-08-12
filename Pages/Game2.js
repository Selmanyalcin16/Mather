import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  Button,
} from "react-native";
const width_proportion2 = "100%";
const height_proportion2 = "100%";
import { Entypo, FontAwesome5, Ionicons, Feather } from "@expo/vector-icons";
import Boxes from "../Components/Boxes";
import Modals from "../Components/Modals";
import Header from "../Components/Header";
import { AdMobBanner } from "expo-ads-admob";
import { useEffect } from "react";
import { useState } from "react";
import { generate } from "../Functions/Generate";
import { check } from "../Functions/Check";
import { useNavigation } from "@react-navigation/native";

export default function Game() {
  //Tanımlamalar
  const navigation = useNavigation();
  const [operation, SetOperation] = useState("");
  const [attemptCount, SetAttemptCount] = useState(0);
  const [typedLetter, SettypedLetter] = useState(0);
  const [gameState, SetgameState] = useState("");
  const [typedWord, SettypedWord] = useState([]);
  const [typedWord1, SettypedWord1] = useState([]);
  const [typedWord2, SettypedWord2] = useState([]);
  const [typedWord3, SettypedWord3] = useState([]);
  const [typedWord4, SettypedWord4] = useState([]);
  const [typedWord5, SettypedWord5] = useState([]);
  const [won, Setwon] = useState("");
  const [cups, Setcups] = useState("");
  const [modal, Setmodal] = useState(false);
  const [colors1, Setcolors1] = useState([]);
  const [colors2, Setcolors2] = useState([]);
  const [colors3, Setcolors3] = useState([]);
  const [colors4, Setcolors4] = useState([]);
  const [colors5, Setcolors5] = useState([]);
  const [colors6, Setcolors6] = useState([]);
  useEffect(() => SetOperation(generate()), []);

  ///Fonksiyonlar

  ///Eve Dönüş Fonksiyonu
  const goHome = () => {
    Setmodal(false);
    navigation.navigate("Home");
  };
  ///Yeniden Oynama
  const playAgain = () => {
    Setmodal(false);
    navigation.navigate("Random Game");
  };
  ////Yazma Fonksiyonu
  const typeWord = async (Value) => {
    if (typedLetter < 8 && gameState != "You Won!") {
      if (attemptCount == 0) {
        SettypedWord(typedWord.concat(Value));
        SettypedLetter(typedLetter + 1);
      }
      if (attemptCount == 1) {
        SettypedWord1(typedWord1.concat(Value));
        SettypedLetter(typedLetter + 1);
      }
      if (attemptCount == 2) {
        SettypedWord2(typedWord2.concat(Value));
        SettypedLetter(typedLetter + 1);
      }
      if (attemptCount == 3) {
        SettypedWord3(typedWord3.concat(Value));
        SettypedLetter(typedLetter + 1);
      }
      if (attemptCount == 4) {
        SettypedWord4(typedWord4.concat(Value));
        SettypedLetter(typedLetter + 1);
      }
      if (attemptCount == 5) {
        SettypedWord5(typedWord5.concat(Value));
        SettypedLetter(typedLetter + 1);
      }
    }
  };
  ///Silme Fonksiyonu
  const deleteWord = async () => {
    if (typedLetter > 0) {
      if (attemptCount == 0) {
        SettypedWord(typedWord.slice(0, -1));
        SettypedLetter(typedLetter - 1);
      }
      if (attemptCount == 1) {
        SettypedWord1(typedWord1.slice(0, -1));
        SettypedLetter(typedLetter - 1);
      }
      if (attemptCount == 2) {
        SettypedWord2(typedWord2.slice(0, -1));
        SettypedLetter(typedLetter - 1);
      }
      if (attemptCount == 3) {
        SettypedWord3(typedWord3.slice(0, -1));
        SettypedLetter(typedLetter - 1);
      }
      if (attemptCount == 4) {
        SettypedWord4(typedWord4.slice(0, -1));
        SettypedLetter(typedLetter - 1);
      }
      if (attemptCount == 5) {
        SettypedWord5(typedWord5.slice(0, -1));
        SettypedLetter(typedLetter - 1);
      }
    }
  };
  ///Enter
  const enterWord = async () => {
    if (typedLetter == 8) {
      let selectedOperation;
      if (attemptCount == 0) {
        selectedOperation = typedWord;
      }
      if (attemptCount == 1) {
        selectedOperation = typedWord1;
      }
      if (attemptCount == 2) {
        selectedOperation = typedWord2;
      }
      if (attemptCount == 3) {
        selectedOperation = typedWord3;
      }
      if (attemptCount == 4) {
        selectedOperation = typedWord4;
      }
      if (attemptCount == 5) {
        selectedOperation = typedWord5;
      }
      check(attemptCount, selectedOperation, typedLetter, operation).then(
        function (result) {
          if (result == "Invalid") {
            Alert.alert("Operation is not valid!");
          } else {
            if (attemptCount < 7) {
              SetAttemptCount(attemptCount + 1);
              SettypedLetter(0);
            }
          }
          if (result == "GAME WON") {
            console.log(result, "Kazanıldı");
            Setwon("You Won !");
            Setcups("+10");
            Setmodal(true);
          }
          if (result != "GAME WON" && result != "Invalid") {
            if (attemptCount == 0) {
              Setcolors1(result);
              console.log("color", colors1);
            }
            if (attemptCount == 1) {
              Setcolors2(result);
              console.log("color", colors1);
            }
            if (attemptCount == 2) {
              Setcolors3(result);
              console.log("color", colors1);
            }
            if (attemptCount == 3) {
              Setcolors4(result);
              console.log("color", colors3);
            }
            if (attemptCount == 4) {
              Setcolors5(result);
              console.log("color", colors4);
            }
            if (attemptCount == 5) {
              Setcolors6(result);
              console.log("color", colors5);
            }
            console.log("attempt count sayı", attemptCount);
            if (attemptCount == 5) {
              Setwon("You Lost !");
              Setcups("-10");
              Setmodal(true);
            }
          }
        }
      );
    } else {
      Alert.alert("Not enough characters");
    }
  };

  return (
    <View style={styles.Main}>
      <Header ScreenName="Random Game" />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          this.setState({
            modalVisible: false,
          });
        }}
      >
        <View style={styles.ModalMain}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Modals gameStatus={won} cups={cups} />
              <View style={styles.Header}>
                <Button title="Home" onPress={goHome} />
                <Button title="Play Again" onPress={playAgain} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Text>{operation}</Text>
      <Text>{typedLetter}</Text>
      <Text>{attemptCount}</Text>

      <Boxes
        typedWord={typedWord}
        typedWord1={typedWord1}
        typedWord2={typedWord2}
        typedWord3={typedWord3}
        typedWord4={typedWord4}
        typedWord5={typedWord5}
        colors1={colors1}
        colors2={colors2}
        colors3={colors3}
        colors4={colors4}
        colors5={colors5}
        colors6={colors6}
      />

      <View style={styles.Buttons}>
        <View style={styles.ButtonBoxes}>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("0")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("1")}
          >
            <View style={[styles.Button]}>
              <Text style={[styles.Text]}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("2")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("3")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("4")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>4</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonBoxes}>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("5")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("6")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>6</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("7")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("8")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("9")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>9</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonBoxes}>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("+")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("-")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("/")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>/</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("*")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>*</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("=")}
          >
            <View style={[styles.Button]}>
              <Text style={styles.Text}>=</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.BottomButtonsContainer}>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => deleteWord()}
          >
            <View style={styles.Button}>
              <Feather
                style={{ transform: [{ rotate: "180deg" }] }}
                name="delete"
                size={32}
                color="black"
              />
              <Text style={{ fontSize: 20, marginLeft: "3%" }}>Delete</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => enterWord()}
          >
            <View style={[styles.Button, { justifyContent: "flex-start" }]}>
              <Ionicons
                style={{ marginLeft: "5%" }}
                name="md-enter-outline"
                size={34}
                color="black"
              />
              <Text style={{ fontSize: 20, marginLeft: "3%" }}>Enter</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
  },

  Ad: {
    flex: 0.3,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "blue",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  Text: {
    fontSize: 35,
    color: "black",
  },

  Button: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "2.5%",
    borderRadius: 10,
    width: width_proportion2,
    height: height_proportion2,
  },
  ButtonBoxes: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: "5%",
    paddingRight: "5%",
    justifyContent: "space-between",
    paddingTop: "1%",
    paddingBottom: "2%",
    alignItems: "center",
  },
  Buttons: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  BottomButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: "15%",
    paddingRight: "15%",
    justifyContent: "space-between",
    marginTop: "2%",
    paddingTop: "2%",
    paddingBottom: "2%",
    alignItems: "center",
  },

  ////////////////////////
  //Modal Tasarım
  ///////////////////////

  ModalMain: {
    display: "flex",
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  ModalButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    height: "100%",
    backgroundColor: "red",
  },
  ModalButton2: {
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: -2,
    paddingTop: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: "28%",
  },
  CupText: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  ModalBox: {
    backgroundColor: "#32de84",
    flex: 1,
    width: 20,
    height: 30,
    marginLeft: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  ModalBoxes: {
    display: "flex",
    flexDirection: "row",
    flex: 0.1,
    justifyContent: "space-between",
    marginBottom: 1,
    marginTop: 15,
  },
  modalText: {
    marginBottom: 10,
    fontSize: 28,
    textAlign: "center",
  },
  Header: {
    display: "flex",
    paddingTop: "8%",
    backgroundColor: "white",
    flex: 0.07,
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
});

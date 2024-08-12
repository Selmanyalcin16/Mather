import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  Button,
  Touchable,
  Dimensions,
} from "react-native";
const width_proportion2 = "100%";
const height_proportion2 = "100%";
import {
  Entypo,
  FontAwesome5,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import Boxes from "../Components/Boxes";
import Modals from "../Components/Modals";
import Header from "../Components/Header";
import { AdMobBanner } from "expo-ads-admob";
import { useEffect } from "react";
import { useState } from "react";
import { generate } from "../Functions/Generate";
import { check } from "../Functions/Check";
import { win } from "../Functions/Win";
import { lost } from "../Functions/Lost";
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
  const [text1, Settext1] = useState("black");
  const [text2, Settext2] = useState("black");
  const [text3, Settext3] = useState("black");
  const [text4, Settext4] = useState("black");
  const [text5, Settext5] = useState("black");
  const [text6, Settext6] = useState("black");
  const [greens, Setgreens] = useState([]);
  const [yellows, Setyellows] = useState([]);
  const [grays, Setgrays] = useState([]);
  const [reload, Setreload] = useState(false);
  const [zero, Setzero] = useState("white");
  const [one, Setone] = useState("white");
  const [two, Settwo] = useState("white");
  const [three, Setthree] = useState("white");
  const [four, Setfour] = useState("white");
  const [five, Setfive] = useState("white");
  const [six, Setsix] = useState("white");
  const [seven, Setseven] = useState("white");
  const [eight, Seteight] = useState("white");
  const [nine, Setnine] = useState("white");
  const [topla, Settopla] = useState("white");
  const [cikar, Setcikar] = useState("white");
  const [bol, Setbol] = useState("white");
  const [carp, Setcarp] = useState("white");
  const [esittir, Setesittir] = useState("white");

  useEffect(() => SetOperation(generate()), []);
  useEffect(() => reloadGame(), [reload]);
  ///Fonksiyonlar

  ///Eve Dönüş Fonksiyonu
  const goHome = () => {
    Setmodal(false);
    navigation.navigate("Home");
  };
  ///Yeniden Oynama
  const playAgain = () => {
    Setmodal(false);
    Setreload(true);
  };
  ///Oyunu Yeniden Yükleme
  const reloadGame = () => {
    console.log("reloading...");
    SetOperation(generate());
    SetAttemptCount(0);
    SettypedLetter(0);
    SetgameState("");
    SettypedWord([]);
    SettypedWord1([]);
    SettypedWord2([]);
    SettypedWord3([]);
    SettypedWord4([]);
    SettypedWord5([]);
    Setwon("");
    Setcups("");
    Setmodal(false);
    Setreload(false);
    Setcolors1([]);
    Setcolors2([]);
    Setcolors3([]);
    Setcolors4([]);
    Setcolors5([]);
    Setcolors6([]);
    Settext1("black");
    Settext2("black");
    Settext3("black");
    Settext4("black");
    Settext5("black");
    Settext6("black");
    Setgreens([]);
    Setyellows([]);
    Setgrays([]);
    Setzero("white");
    Setone("white");
    Settwo("white");
    Setthree("white");
    Setfour("white");
    Setfive("white");
    Setsix("white");
    Setseven("white");
    Seteight("white");
    Setnine("white");
    Settopla("white");
    Setcikar("white");
    Setbol("white");
    Setcarp("white");
    Setesittir("white");
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
  ////Buton renkler
  const buttonColors = (greencolor, yellowcolor, graycolor) => {
    let greenArray = [];
    let yellowArray = [];
    let grayArray = [];
    greenArray = greenArray.concat(greencolor);
    yellowArray = yellowArray.concat(yellowcolor);
    grayArray = grayArray.concat(graycolor);
    //0
    if (greenArray.includes("0") == true) {
      Setzero("#32de84");
    } else if (yellowArray.includes("0") == true) {
      Setzero("#FFD700");
    } else if (grayArray.includes("0") == true) {
      Setzero("#C0C0C0");
    }
    //1
    if (greenArray.includes("1") == true) {
      Setone("#32de84");
    } else if (yellowArray.includes("1") == true) {
      Setone("#FFD700");
    } else if (grayArray.includes("1") == true) {
      Setone("#C0C0C0");
    }
    //2
    if (greenArray.includes("2") == true) {
      Settwo("#32de84");
    } else if (yellowArray.includes("2") == true) {
      Settwo("#FFD700");
    } else if (grayArray.includes("2") == true) {
      Settwo("#C0C0C0");
    }
    //3
    if (greenArray.includes("3") == true) {
      Setthree("#32de84");
    } else if (yellowArray.includes("3") == true) {
      Setthree("#FFD700");
    } else if (grayArray.includes("3") == true) {
      Setthree("#C0C0C0");
    }
    //4
    if (greenArray.includes("4") == true) {
      Setfour("#32de84");
    } else if (yellowArray.includes("4") == true) {
      Setfour("#FFD700");
    } else if (grayArray.includes("4") == true) {
      Setfour("#C0C0C0");
    }
    //5
    if (greenArray.includes("5") == true) {
      Setfive("#32de84");
    } else if (yellowArray.includes("5") == true) {
      Setfive("#FFD700");
    } else if (grayArray.includes("5") == true) {
      Setfive("#C0C0C0");
    }
    //6
    if (greenArray.includes("6") == true) {
      Setsix("#32de84");
    } else if (yellowArray.includes("6") == true) {
      Setsix("#FFD700");
    } else if (grayArray.includes("6") == true) {
      Setsix("#C0C0C0");
    }
    //7
    if (greenArray.includes("7") == true) {
      Setseven("#32de84");
    } else if (yellowArray.includes("7") == true) {
      Setseven("#FFD700");
    } else if (grayArray.includes("7") == true) {
      Setseven("#C0C0C0");
    }
    //8
    if (greenArray.includes("8") == true) {
      Seteight("#32de84");
    } else if (yellowArray.includes("8") == true) {
      Seteight("#FFD700");
    } else if (grayArray.includes("8") == true) {
      Seteight("#C0C0C0");
    }
    //9
    if (greenArray.includes("9") == true) {
      Setnine("#32de84");
    } else if (yellowArray.includes("9") == true) {
      Setnine("#FFD700");
    } else if (grayArray.includes("9") == true) {
      Setnine("#C0C0C0");
    }
    //=
    if (greenArray.includes("=") == true) {
      Setesittir("#32de84");
    } else if (yellowArray.includes("=") == true) {
      Setesittir("#FFD700");
    } else if (grayArray.includes("0") == true) {
      Setesittir("#C0C0C0");
    }
    //+
    if (greenArray.includes("+") == true) {
      Settopla("#32de84");
    } else if (yellowArray.includes("+") == true) {
      Settopla("#FFD700");
    } else if (grayArray.includes("+") == true) {
      Settopla("#C0C0C0");
    }
    //-
    if (greenArray.includes("-") == true) {
      Setcikar("#32de84");
    } else if (yellowArray.includes("-") == true) {
      Setcikar("#FFD700");
    } else if (grayArray.includes("-") == true) {
      Setcikar("#C0C0C0");
    }
    //*
    if (greenArray.includes("*") == true) {
      Setcarp("#32de84");
    } else if (yellowArray.includes("*") == true) {
      Setcarp("#FFD700");
    } else if (grayArray.includes("*") == true) {
      Setcarp("#C0C0C0");
    }
    // /
    if (greenArray.includes("/") == true) {
      Setbol("#32de84");
    } else if (yellowArray.includes("/") == true) {
      Setbol("#FFD700");
    } else if (grayArray.includes("/") == true) {
      Setbol("#C0C0C0");
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
          let green = [];
          let yellow = [];
          let gray = [];
          if (result == "GAME WON") {
            let result2 = result;
            if (attemptCount == 0) {
              Setcolors1([
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
              ]);
              Settext1("white");
              green = green.concat(typedWord);
            }
            if (attemptCount == 1) {
              Setcolors2([
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
              ]);
              Settext2("white");
              green = green.concat(typedWord2);
            }
            if (attemptCount == 2) {
              Setcolors3([
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
              ]);
              Settext3("white");
              green = green.concat(typedWord3);
            }
            if (attemptCount == 3) {
              Setcolors4([
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
              ]);
              Settext4("white");
              green = green.concat(typedWord4);
            }
            if (attemptCount == 4) {
              Setcolors5([
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
              ]);
              Settext5("white");
              green = green.concat(typedWord4);
            }
            if (attemptCount == 5) {
              Setcolors6([
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
                "#32de84",
              ]);
              Settext6("white");
              green = green.concat(typedWord5);
            }
            Setwon("You Won !");
            Setcups("+10");
            Setmodal(true);
            win();
            console.log("winden sonra", green);
          }
          if (result != "GAME WON" && result != "Invalid") {
            let result2 = result;

            if (attemptCount == 0) {
              Setcolors1(result2);
              green = green.concat(result2[8]);
              yellow = yellow.concat(result2[9]);
              gray = gray.concat(result2[10]);
              Settext1("white");
            }
            if (attemptCount == 1) {
              Setcolors2(result2);
              green = green.concat(result2[8]);
              yellow = yellow.concat(result2[9]);
              gray = gray.concat(result2[10]);
              Settext2("white");
            }
            if (attemptCount == 2) {
              Setcolors3(result);
              green = green.concat(result2[8]);
              yellow = yellow.concat(result2[9]);
              gray = gray.concat(result2[10]);
              Settext3("white");
            }
            if (attemptCount == 3) {
              Setcolors4(result);
              green = green.concat(result2[8]);
              yellow = yellow.concat(result2[9]);
              gray = gray.concat(result2[10]);
              Settext4("white");
            }
            if (attemptCount == 4) {
              Setcolors5(result);
              green = green.concat(result2[8]);
              yellow = yellow.concat(result2[9]);
              gray = gray.concat(result2[10]);
              Settext5("white");
            }
            if (attemptCount == 5) {
              Setcolors6(result);
              green = green.concat(result2[8]);
              yellow = yellow.concat(result2[9]);
              gray = gray.concat(result2[10]);
              Settext6("white");
            }
            console.log("attempt count sayı", attemptCount);
            if (attemptCount == 5) {
              Setwon("You Lost !");
              Setcups("-10");
              Setmodal(true);
              lost();
            }
          }
          buttonColors(green, yellow, gray);
        }
      );
    } else {
      Alert.alert("Not enough characters");
    }
  };

  buttonColors(greens, yellows, grays);

  return (
    <View style={styles.Main}>
      <Header ScreenName="Random Game" />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {}}
      >
        <View style={styles.ModalMain}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Modals
                gameStatus={won}
                cups={cups}
                colors1={colors1}
                colors2={colors2}
                colors3={colors3}
                colors4={colors4}
                colors5={colors5}
                colors6={colors6}
                answer={operation}
              />
              <View style={styles.Header}>
                <TouchableOpacity style={styles.ModalButton} onPress={goHome}>
                  <Entypo name="home" size={48} color="#32de84" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.ModalButton}
                  onPress={playAgain}
                >
                  <AntDesign name="reload1" size={46} color="#32de84" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

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
        text1={text1}
        text2={text2}
        text3={text3}
        text4={text4}
        text5={text5}
        text6={text6}
      />

      <View style={styles.Buttons}>
        <View style={styles.ButtonBoxes}>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("0")}
          >
            <View style={[styles.Button, , { backgroundColor: zero }]}>
              <Text style={styles.Text}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("1")}
          >
            <View style={[styles.Button, { backgroundColor: one }]}>
              <Text style={[styles.Text]}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("2")}
          >
            <View style={[styles.Button, { backgroundColor: two }]}>
              <Text style={styles.Text}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("3")}
          >
            <View style={[styles.Button, { backgroundColor: three }]}>
              <Text style={styles.Text}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("4")}
          >
            <View style={[styles.Button, { backgroundColor: four }]}>
              <Text style={styles.Text}>4</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonBoxes}>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("5")}
          >
            <View style={[styles.Button, { backgroundColor: five }]}>
              <Text style={styles.Text}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("6")}
          >
            <View style={[styles.Button, { backgroundColor: six }]}>
              <Text style={styles.Text}>6</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("7")}
          >
            <View style={[styles.Button, { backgroundColor: seven }]}>
              <Text style={styles.Text}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("8")}
          >
            <View style={[styles.Button, { backgroundColor: eight }]}>
              <Text style={styles.Text}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("9")}
          >
            <View style={[styles.Button, { backgroundColor: nine }]}>
              <Text style={styles.Text}>9</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonBoxes}>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("+")}
          >
            <View style={[styles.Button, { backgroundColor: topla }]}>
              <Text style={styles.Text}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("-")}
          >
            <View style={[styles.Button, { backgroundColor: cikar }]}>
              <Text style={styles.Text}>-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("/")}
          >
            <View style={[styles.Button, { backgroundColor: bol }]}>
              <Text style={styles.Text}>/</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("*")}
          >
            <View style={[styles.Button, , { backgroundColor: carp }]}>
              <Text style={styles.Text}>*</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("=")}
          >
            <View style={[styles.Button, { backgroundColor: esittir }]}>
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
  //////////////////
  /////Genel Tasarım
  //////////////////

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
    marginHorizontal: Dimensions.get("window").width / 40,
    borderRadius: 10,
    width: width_proportion2,
    height: height_proportion2,
  },
  ButtonBoxes: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: Dimensions.get("window").width / 20,
    paddingRight: Dimensions.get("window").width / 20,
    justifyContent: "space-between",
    paddingTop: Dimensions.get("window").width / 100,
    paddingBottom: Dimensions.get("window").width / 50,
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
    flex: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    paddingLeft: Dimensions.get("window").width / 10,
    paddingRight: Dimensions.get("window").width / 10,
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
    marginVertical: Dimensions.get("window").height / 8.66666667,
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
    backgroundColor: "white",
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "10%",
  },
  Text: {
    fontSize: 20,
    color: "black",
    marginLeft: "3%",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  ModalButton: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "white",
    height: 50,
    marginRight: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

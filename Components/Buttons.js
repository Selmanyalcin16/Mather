import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { typeWord } from "../Functions/TypeWord";
import { useState } from "react";

export default function Buttons() {
  const [typedLetter, SettypedLetter] = useState(0);
  const [attemptCount, SetAttemptCount] = useState(0);

  return (
    <View style={styles.Main}>
      <View style={styles.Buttons}>
        <View style={styles.ButtonBoxes}>
          <TouchableOpacity
            style={{ flex: 1, marginHorizontal: "2.5%" }}
            onPress={() => typeWord("0", 0, 0)}
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
        <View
          style={{
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
          }}
        >
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
    </View>
  );
}

const styles = StyleSheet.create({

});

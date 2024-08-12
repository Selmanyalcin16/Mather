import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome5, Ionicons, Feather } from "@expo/vector-icons";
import ModalButtons from "./ModalButtons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Modals(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.Boxes}>
      <Text style={styles.modalText}>{props.gameStatus}</Text>
      <Text style={styles.CupText}>Answer: {props.answer}</Text>
      <Text style={styles.CupText}>Cups: {props.cups}</Text>
      <View style={styles.ModalBoxes}>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors1[0] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors1[1] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors1[2] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors1[3] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors1[4] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors1[5] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors1[6] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors1[7] }]}
        ></View>
      </View>
      <View style={styles.ModalBoxes}>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors2[0] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors2[1] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors2[2] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors2[3] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors2[4] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors2[5] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors2[6] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors2[7] }]}
        ></View>
      </View>
      <View style={styles.ModalBoxes}>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors3[0] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors3[1] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors3[2] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors3[3] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors3[4] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors3[5] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors3[6] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors3[7] }]}
        ></View>
      </View>
      <View style={styles.ModalBoxes}>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors4[0] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors4[1] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors4[2] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors4[3] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors4[4] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors4[5] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors4[6] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors4[7] }]}
        ></View>
      </View>
      <View style={styles.ModalBoxes}>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors5[0] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors5[1] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors5[2] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors5[3] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors5[4] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors5[5] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors5[6] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors5[7] }]}
        ></View>
      </View>
      <View style={styles.ModalBoxes}>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors6[0] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors6[1] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors6[2] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors6[3] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors6[4] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors6[5] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors6[6] }]}
        ></View>
        <View
          style={[styles.ModalBox, { backgroundColor: props.colors6[7] }]}
        ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Boxes: {
    backgroundColor: "white",
    flex: 0.8,
    width: "100%",
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
    flex: 0.1,
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
    width: "300%",
    height: "300%",
  },
});

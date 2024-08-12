const typeWord = async (Value) => {
  if (this.state.typedLetter < 8) {
    if (this.state.attemptCount == 0) {
      this.setState({
        typedWord: this.state.typedWord.concat(Value),
        typedLetter: this.state.typedLetter + 1,
      });
    }
    if (this.state.attemptCount == 1) {
      this.setState({
        typedWord1: this.state.typedWord1.concat(Value),
        typedLetter: this.state.typedLetter + 1,
      });
    }
    if (this.state.attemptCount == 2) {
      this.setState({
        typedWord2: this.state.typedWord2.concat(Value),
        typedLetter: this.state.typedLetter + 1,
      });
    }
    if (this.state.attemptCount == 3) {
      this.setState({
        typedWord3: this.state.typedWord3.concat(Value),
        typedLetter: this.state.typedLetter + 1,
      });
    }
    if (this.state.attemptCount == 4) {
      this.setState({
        typedWord4: this.state.typedWord4.concat(Value),
        typedLetter: this.state.typedLetter + 1,
      });
    }
    if (this.state.attemptCount == 5) {
      this.setState({
        typedWord5: this.state.typedWord5.concat(Value),
        typedLetter: this.state.typedLetter + 1,
      });
    }

    console.log(this.state.typedWord, this.state.typedLetter);
  }
};

const deleteWord = async () => {
  if (this.state.typedLetter > 0) {
    if (this.state.attemptCount == 0) {
      this.setState({
        typedWord: this.state.typedWord.slice(0, -1),
        typedLetter: this.state.typedLetter - 1,
      });
    }
    if (this.state.attemptCount == 1) {
      this.setState({
        typedWord1: this.state.typedWord1.slice(0, -1),
        typedLetter: this.state.typedLetter - 1,
      });
    }
    if (this.state.attemptCount == 2) {
      this.setState({
        typedWord2: this.state.typedWord2.slice(0, -1),
        typedLetter: this.state.typedLetter - 1,
      });
    }
    if (this.state.attemptCount == 3) {
      this.setState({
        typedWord3: this.state.typedWord3.slice(0, -1),
        typedLetter: this.state.typedLetter - 1,
      });
    }
    if (this.state.attemptCount == 4) {
      this.setState({
        typedWord4: this.state.typedWord4.slice(0, -1),
        typedLetter: this.state.typedLetter - 1,
      });
    }
    if (this.state.attemptCount == 5) {
      this.setState({
        typedWord5: this.state.typedWord5.slice(0, -1),
        typedLetter: this.state.typedLetter - 1,
      });
    }
  }
  console.log(this.state.typedWord);
};

import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      box1: "#32de84",
      box2: "#32de84",
      box3: "#32de84",
      box4: "#32de84",
      box5: "#32de84",
      box6: "#32de84",
      box7: "#32de84",
      box8: "#32de84",
      box9: "#32de84",
      box10: "#32de84",
      box11: "#32de84",
      box12: "#32de84",
      box13: "#32de84",
      box14: "yellow",
      box15: "yellow",
      box16: "yellow",
      box17: "yellow",
      box18: "yellow",
      box19: "yellow",
      box20: "yellow",
      box21: "yellow",
      box22: "yellow",
      box23: "yellow",
      box24: "yellow",
      box25: "yellow",
      box26: "yellow",
      box27: "yellow",
      box28: "#32de84",
      box29: "#32de84",
      box30: "#32de84",
      box31: "#32de84",
      box32: "#32de84",
      box33: "#32de84",
      box34: "#32de84",
      box35: "#32de84",
      box36: "#32de84",
      box37: "#32de84",
      box38: "#32de84",
      box39: "#32de84",
      box40: "#32de84",
      box41: "#32de84",
      box42: "#32de84",
      box43: "#32de84",
      box44: "#32de84",
      box45: "#32de84",
      box46: "#32de84",
      box47: "#32de84",
      box48: "#32de84",
    };
  }
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 0.25,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={[
                    styles.ModalBox,
                    { backgroundColor: this.state.box1 },
                  ]}
                ></View>
                <View
                  style={[
                    styles.ModalBox,
                    { backgroundColor: this.state.box1 },
                  ]}
                ></View>
                <View
                  style={[
                    styles.ModalBox,
                    { backgroundColor: this.state.box1 },
                  ]}
                ></View>
                <View
                  style={[
                    styles.ModalBox,
                    { backgroundColor: this.state.box1 },
                  ]}
                ></View>
                <View
                  style={[
                    styles.ModalBox,
                    { backgroundColor: this.state.box1 },
                  ]}
                ></View>
                <View
                  style={[
                    styles.ModalBox,
                    { backgroundColor: this.state.box1 },
                  ]}
                ></View>
                <View
                  style={[
                    styles.ModalBox,
                    { backgroundColor: this.state.box1 },
                  ]}
                ></View>
                <View
                  style={[
                    styles.ModalBox,
                    { backgroundColor: this.state.box1 },
                  ]}
                ></View>
              </View>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
        <View
          style={{ backgroundColor: "blue", flex: 0.05, width: 40, height: 5 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  ModalBox: {
    backgroundColor: "blue",
    flex: 1,
    width: 20,
    height: 30,
    marginLeft: 5,
    borderRadius: 5,
  },
});

export default App;

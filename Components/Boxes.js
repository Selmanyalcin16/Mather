import { useLinkProps } from "@react-navigation/native";
import { StyleSheet, View, Text, Dimensions } from "react-native";
const width_proportion = "90%";
const height_proportion = "90%";
const width_proportion2 = "100%";
const height_proportion2 = "100%";

export default function Boxes(props) {
  return (
    <View style={styles.Main}>
      <View style={styles.NumberBoxes}>
        <View style={styles.Boxes}>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors1[0] }]}
          >
            <Text style={[styles.Text, { color: props.text1 }]}>
              {props.typedWord[0]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors1[1] }]}
          >
            <Text style={[styles.Text, { color: props.text1 }]}>
              {props.typedWord[1]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors1[2] }]}
          >
            <Text style={[styles.Text, { color: props.text1 }]}>
              {props.typedWord[2]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors1[3] }]}
          >
            <Text style={[styles.Text, { color: props.text1 }]}>
              {props.typedWord[3]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors1[4] }]}
          >
            <Text style={[styles.Text, { color: props.text1 }]}>
              {props.typedWord[4]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors1[5] }]}
          >
            <Text style={[styles.Text, { color: props.text1 }]}>
              {props.typedWord[5]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors1[6] }]}
          >
            <Text style={[styles.Text, { color: props.text1 }]}>
              {props.typedWord[6]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors1[7] }]}
          >
            <Text style={[styles.Text, { color: props.text1 }]}>
              {props.typedWord[7]}
            </Text>
          </View>
        </View>
        <View style={styles.Boxes}>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors2[0] }]}
          >
            <Text style={[styles.Text, { color: props.text2 }]}>
              {props.typedWord1[0]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors2[1] }]}
          >
            <Text style={[styles.Text, { color: props.text2 }]}>
              {props.typedWord1[1]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors2[2] }]}
          >
            <Text style={[styles.Text, { color: props.text2 }]}>
              {props.typedWord1[2]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors2[3] }]}
          >
            <Text style={[styles.Text, { color: props.text2 }]}>
              {props.typedWord1[3]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors2[4] }]}
          >
            <Text style={[styles.Text, { color: props.text2 }]}>
              {props.typedWord1[4]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors2[5] }]}
          >
            <Text style={[styles.Text, { color: props.text2 }]}>
              {props.typedWord1[5]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors2[6] }]}
          >
            <Text style={[styles.Text, { color: props.text2 }]}>
              {props.typedWord1[6]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors2[7] }]}
          >
            <Text style={[styles.Text, { color: props.text2 }]}>
              {props.typedWord1[7]}
            </Text>
          </View>
        </View>
        <View style={styles.Boxes}>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors3[0] }]}
          >
            <Text style={[styles.Text, { color: props.text3 }]}>
              {props.typedWord2[0]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors3[1] }]}
          >
            <Text style={[styles.Text, { color: props.text3 }]}>
              {props.typedWord2[1]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors3[2] }]}
          >
            <Text style={[styles.Text, { color: props.text3 }]}>
              {props.typedWord2[2]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors3[3] }]}
          >
            <Text style={[styles.Text, { color: props.text3 }]}>
              {props.typedWord2[3]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors3[4] }]}
          >
            <Text style={[styles.Text, { color: props.text3 }]}>
              {props.typedWord2[4]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors3[5] }]}
          >
            <Text style={[styles.Text, { color: props.text3 }]}>
              {props.typedWord2[5]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors3[6] }]}
          >
            <Text style={[styles.Text, { color: props.text3 }]}>
              {props.typedWord2[6]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors3[7] }]}
          >
            <Text style={[styles.Text, { color: props.text3 }]}>
              {props.typedWord2[7]}
            </Text>
          </View>
        </View>
        <View style={styles.Boxes}>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors4[0] }]}
          >
            <Text style={[styles.Text, { color: props.text4 }]}>
              {props.typedWord3[0]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors4[1] }]}
          >
            <Text style={[styles.Text, { color: props.text4 }]}>
              {props.typedWord3[1]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors4[2] }]}
          >
            <Text style={[styles.Text, { color: props.text4 }]}>
              {props.typedWord3[2]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors4[3] }]}
          >
            <Text style={[styles.Text, { color: props.text4 }]}>
              {props.typedWord3[3]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors4[4] }]}
          >
            <Text style={[styles.Text, { color: props.text4 }]}>
              {props.typedWord3[4]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors4[5] }]}
          >
            <Text style={[styles.Text, { color: props.text4 }]}>
              {props.typedWord3[5]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors4[6] }]}
          >
            <Text style={[styles.Text, { color: props.text4 }]}>
              {props.typedWord3[6]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors4[7] }]}
          >
            <Text style={[styles.Text, { color: props.text4 }]}>
              {props.typedWord3[7]}
            </Text>
          </View>
        </View>
        <View style={styles.Boxes}>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors5[0] }]}
          >
            <Text style={[styles.Text, { color: props.text5 }]}>
              {props.typedWord4[0]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors5[1] }]}
          >
            <Text style={[styles.Text, { color: props.text5 }]}>
              {props.typedWord4[1]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors5[2] }]}
          >
            <Text style={[styles.Text, { color: props.text5 }]}>
              {props.typedWord4[2]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors5[3] }]}
          >
            <Text style={[styles.Text, { color: props.text5 }]}>
              {props.typedWord4[3]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors5[4] }]}
          >
            <Text style={[styles.Text, { color: props.text5 }]}>
              {props.typedWord4[4]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors5[5] }]}
          >
            <Text style={[styles.Text, { color: props.text5 }]}>
              {props.typedWord4[5]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors5[6] }]}
          >
            <Text style={[styles.Text, { color: props.text5 }]}>
              {props.typedWord4[6]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors5[7] }]}
          >
            <Text style={[styles.Text, { color: props.text5 }]}>
              {props.typedWord4[7]}
            </Text>
          </View>
        </View>
        <View style={styles.Boxes}>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors6[0] }]}
          >
            <Text style={[styles.Text, { color: props.text6 }]}>
              {props.typedWord5[0]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors6[1] }]}
          >
            <Text style={[styles.Text, { color: props.text6 }]}>
              {props.typedWord5[1]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors6[2] }]}
          >
            <Text style={[styles.Text, { color: props.text6 }]}>
              {props.typedWord5[2]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors6[3] }]}
          >
            <Text style={[styles.Text, { color: props.text6 }]}>
              {props.typedWord5[3]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors6[4] }]}
          >
            <Text style={[styles.Text, { color: props.text6 }]}>
              {props.typedWord5[4]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors6[5] }]}
          >
            <Text style={[styles.Text, { color: props.text6 }]}>
              {props.typedWord5[5]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors6[6] }]}
          >
            <Text style={[styles.Text, { color: props.text6 }]}>
              {props.typedWord5[6]}
            </Text>
          </View>
          <View
            style={[styles.NumberBox, { backgroundColor: props.colors6[7] }]}
          >
            <Text style={[styles.Text, { color: props.text6 }]}>
              {props.typedWord5[7]}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    display: "flex",
    backgroundColor: "red",
    flex: 2,
  },
  Text: {
    fontSize: 35,
    color: "black",
  },
  NumberBox: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: Dimensions.get("window").width / 250,
    borderRadius: 10,
    width: width_proportion,
    height: height_proportion,
  },
  Boxes: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: Dimensions.get("window").width / 100,
    paddingRight: Dimensions.get("window").width / 100,
    justifyContent: "space-between",
    marginTop: Dimensions.get("window").width / 200,
    paddingTop: Dimensions.get("window").width / 66.66667,
    paddingBottom: Dimensions.get("window").width / 33.333,
    alignItems: "center",
  },
  NumberBoxes: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
});

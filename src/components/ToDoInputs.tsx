import { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  onAddItem: (text: string) => void;
  visible: boolean;
  onCancel: () => void;
}

export default function ToDoInputs(props: Props) {
  const [enteredText, setEnteredText] = useState("");

  function addHandler() {
    props.onAddItem(enteredText);
    setEnteredText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.headerCenter}>
            <Text style={styles.title}>Add Your Item</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter task"
            onChangeText={setEnteredText}
            value={enteredText}
          />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonFlex}>
            <Button color="gray" title="Cancel" onPress={props.onCancel} />
          </View>
          <View style={styles.buttonFlex}>
            <Button color="#841617" title="Add" onPress={addHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 14,
  },
  headerCenter: {
    flex: 1,
  },
  headerRight: {
    marginLeft: 14,
  },
  title: {
    fontSize: 24,
    color: "#841617",
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    // flexDirection: "row",
    padding: 14,
  },
  textInput: {
    borderColor: "#aaaa",
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 16,
    padding: 12,
    backgroundColor: "#ffff",
  },
  buttonContainer: {
    flexDirection: "row",
    // justifyContent: "flex-end",
    alignItems: "flex-end",
    gap: 16,
    marginTop: 10,
    padding: 14,
  },
  buttonFlex: {
    flex: 1,
    paddingHorizontal: 5,
    // width: "75%",
  },
});

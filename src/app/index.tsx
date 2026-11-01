import { useState } from "react";
import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import ToDoInputs from "../components/ToDoInputs";
import ToDoItem from "../components/ToDoItems";

interface ToDo {
  id: string;
  text: string;
}

export default function Index() {
  const [toDoItems, setToDoItems] = useState<ToDo[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function startAddItemHandler() {
    setModalIsVisible(true);
  }
  function endAddItemHandler() {
    setModalIsVisible(false);
  }

  function addItem(text: string) {
    if (text.trim().length === 0) return;
    setToDoItems((current) => [
      ...current,
      { text: text.trim(), id: Math.random().toString() },
    ]);
    endAddItemHandler();
  }

  function deleteItem(id: string) {
    setToDoItems((current) => current.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.topContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.image}
            source={require("../../assets/images/OU_icon.png")}
          />
        </View>

        <View style={styles.headerCenter} />

        <View style={styles.headerRight}>
          <Text style={styles.title}>To Do List</Text>
        </View>
      </View>

      <ToDoInputs
        visible={modalIsVisible}
        onAddItem={addItem}
        onCancel={endAddItemHandler}
      />

      <View style={styles.itemsContainer}>
        <FlatList
          data={toDoItems}
          renderItem={(itemData) => (
            <ToDoItem
              text={itemData.item.text}
              onDeleteItem={() => deleteItem(itemData.item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Pressable style={styles.addButton} onPress={startAddItemHandler}>
        <Text style={styles.buttonText}>To Do List</Text>
      </Pressable>
      {/* <Button style={styles.addButton} title="Click to Add" onPress={startAddItemHandler}></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    paddingTop: 75,
    paddingHorizontal: 15,
    backgroundColor: "#FDF9D8",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  headerLeft: {
    width: "25%",
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
  itemsContainer: {
    // flex: 1,
    backgroundColor: "#ffff",
    width: "100%",
    height: "60%",
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    paddingVertical: 10,
  },
  addButton: {
    margin: 20,
    padding: 20,
    borderWidth: 2,
    backgroundColor: "#841617",
    borderColor: "#ffff",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#ffff",
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
});

import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  text: string;
  onDeleteItem: () => void;
}

export default function ToDoItem(props: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{props.text}</Text>
      <Pressable onPress={props.onDeleteItem}>
        <Image
          source={require("../../assets/icons/trash-icon.png")}
          style={styles.trashIcon}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 8,
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#841617", //ou crimson
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: { color: "white", fontSize: 16, flex: 1, marginRight: 14 },
  trashIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    tintColor: "white",
  },
});

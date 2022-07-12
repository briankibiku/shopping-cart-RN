import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [person, setPerson] = useState({ first: "John", last: "Doe" });
  function goalInputHandler(enteredText) {
    setNewGoal(enteredText)
  }
  function addGoalHandle() {
    setGoals(prevState => [...prevState, newGoal])
    // update and object using a spread operator using the previous state
    setPerson(prevState => ({ ...prevState, last: "Klein" }))
    console.log(person)
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.formContainer}>
        <TextInput style={styles.textInput} placeholder="Your goal" onChangeText={goalInputHandler} />
        <Text>{newGoal}</Text>
        <Button title="ADD GOAL" onPress={addGoalHandle} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>Goals</Text>
        <Text>Appear here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1
  },
  formContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  textInput: {
    width: "80%",
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    marginRight: 10,
    padding: 5,
  },
  goalsContainer: {
    flex: 5,
    flexDirection: "row-reverse"
  }
});

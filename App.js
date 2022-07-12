import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from "react-native";
import GoalInput from './components/GoalInput';
import Goalitem from './components/Goalitem';

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [person, setPerson] = useState({ first: "John", last: "Doe" });
  function goalInputHandler(enteredText) {
    setNewGoal(enteredText)
  }
  function addGoalHandle() {
    setGoals(prevState => ([...prevState, { text: newGoal, key: Math.random().toString(), id: Math.random().toString() }]))
    // update and object using a spread operator using the previous state
    setPerson(prevState => ({ ...prevState, last: "Klein" }))
    console.log(person)
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.formContainer}>
        <GoalInput goalInputHandler={goalInputHandler} />
        {/* <TextInput style={styles.textInput} placeholder="Your goal" onChangeText={goalInputHandler} /> */}
        <Text>{newGoal}</Text>
        <Button title="ADD GOAL" onPress={addGoalHandle} />
      </View>
      <View style={styles.goalsContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <FlatList data={goals} renderItem={(itemData) => {
          return (
            <Goalitem text={itemData.item.text} />
          )
        }}
          keyExtractor={(item, index) => { return item.id }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
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
  tinyLogo: {
    width: 50,
    height: 50,
  },
  goalsContainer: {
    flex: 5,
    flexDirection: "column",
  },
});

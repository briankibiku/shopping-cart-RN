import { View, TextInput, StyleSheet } from 'react-native';

const GoalInput = ({ goalInputHandler }) => {
    return (
        <View>
            <TextInput style={styles.textInput} placeholder="Your goal" onChangeText={goalInputHandler} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        width: "80%",
        borderRadius: 5,
        borderColor: "#ccc",
        borderWidth: 1,
        marginRight: 10,
        padding: 5,
    },
})

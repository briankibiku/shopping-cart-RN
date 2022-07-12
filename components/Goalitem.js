import { StyleSheet, View, Text } from 'react-native';

const Goalitem = ({ text }) => {
    return (
        <View style={styles.goalItem} >
            <Text style={styles.goalText} >{text}</Text>
        </View>
    );
}

export default Goalitem;

const styles = StyleSheet.create({

    goalItem: {
        padding: 10,
        marginVertical: 10,
        borderRadius: 6,
        backgroundColor: "#5e08cc",
    },
    goalText: {
        color: "white"
    }
})

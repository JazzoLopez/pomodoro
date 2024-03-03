import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const options = ["Pomodoro", "Short Break", "Long Break"];
export default function Header({ time, currentTime, setCurrentTime, setTime }) {

    function handlePress(index) {
        const newTime = index === 0 ? 25 * 60 : index === 1 ? 5 * 60 : 15 * 60;
        setCurrentTime(index);
        setTime(newTime)
    }
    return (
        <View style={{ flexDirection: "row" }} >
            {options.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => handlePress(index)} style={[styles.itemStyle, currentTime !== index && {borderColor:"transparent"}]}>
                    <Text style={{fontWeight: "bold"}}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    itemStyle: {
        width: "33%",
        borderWidth: 3,
        padding: 5,
        borderRadius: 10,
        borderColor:"white",
        marginVertical: 20,
        alignItems: "center"
    }
})
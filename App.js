import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Platform } from 'react-native';
import { useState } from 'react';
import Header from './src/header';

const colors = [
  "#e9ff70",
  "#70d6ff",
  "#ffd670"
]


export default function App() {
  const [isWorkin, setIsWorkin] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG")

  return (
    <SafeAreaView style={[styles.container, {backgroundColor:colors[currentTime]}]}>
      <View style={{ paddingTop: Platform.OS === "android" && 30 }}>
        <Text style={styles.text}>Pomodoro</Text>
        <Text style={styles.text}>{time}</Text>
        <Header 
        currentTime={currentTime} 
        setCurrentTime={setCurrentTime} 
        time={time} setTime={setTime} />


        <StatusBar style="dark" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: { fontSize: 32, fontWeight: "bold" }
});

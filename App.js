import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [customInterval, setCustomInteval] = useState()


  const startTimer = () =>{
    setCustomInteval(
      setInterval(()=>{
        changeTimer()
      }, 1000)
    )
  } 
  const clear = () =>{
    stopTimer()
    setSeconds(0)
    setMinutes(0)
  } 
  const changeTimer = () =>{
    setSeconds((prevState)=>{
      if(prevState + 1 == 60){
        setMinutes(minutes + 1)
        return 0
      }
      return prevState + 1
    })
  } 
  const stopTimer = () =>{
    if(customInterval){
      clearInterval(customInterval)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTimer}>{minutes <10? '0' + minutes : minutes}:{seconds <10? '0' + seconds : seconds}</Text>
      <View style={styles.containerBtn}>
        <Pressable style={styles.buttonStart} onPress={startTimer}>
           <Text>Start</Text>
        </Pressable>
        <Pressable style={styles.buttonStop} onPress={stopTimer}>
           <Text>Stop</Text>
        </Pressable>
        <Pressable style={styles.buttonClear} onPress={clear}>
           <Text>Clear</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18
  },
  textTimer: {
    fontSize: 58,
    fontWeight: 'normal'
  },
  buttonStop:{
    backgroundColor: '#06aafc',
    width: 78,
    margin:15,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonStart:{
    backgroundColor: '#06aafc',
    width: 78,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClear:{
    backgroundColor: '#06aafc',
    width: 78,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

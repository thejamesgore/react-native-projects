import { StatusBar } from 'expo-status-bar'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'

import hiragana from './japanese/Characters'

export default function App() {
  // Declaring our states

  const [input, setInput] = useState('')
  const [currentCharacter, setCurrentCharacter] = useState(0)
  const [streak, setStreak] = useState(0)
  const [streakMax, setStreakMax] = useState(0)
  const [error, setError] = useState(false)

  const setRandomCharacter = () => {
    const randomizer = Math.floor(Math.random() * hiragana.length)
    setCurrentCharacter(randomizer)
  }

  const handleSubmit = () => {
    if (input.toLowerCase() === hiragana[currentCharacter].romanji) {
      setStreak(streak + 1)
      setStreakMax(Math.max(streak, streakMax))
      setError(false)
      alert('You are correct!')
      setRandomCharacter()
    } else {
      alert(`Sorry that was incorrect!`)
      setError(true)
      setStreak(0)
      setRandomCharacter()
    }
  }

  console.log(hiragana[0].hiragana)

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text>Test Your Japanese Character</Text>
        <Text style={styles.hiraganaCharacter}>
          {hiragana[currentCharacter].hiragana}
        </Text>
        <TextInput
          placeholder="Enter Japanese Character"
          onChangeText={(text) => setInput(text)}
          required
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '50%',
    padding: 20,
    borderRadius: 5,
    borderColor: 'black',
  },
  hiragana: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
})

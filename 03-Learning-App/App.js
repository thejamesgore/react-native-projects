import { StatusBar } from 'expo-status-bar'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState, useEffect } from 'react'

import hiragana from './japanese/Characters'

export default function App() {
  const [input, setInput] = useState('')
  const [currentCharacter, setCurrentCharacter] = useState(0)
  const [charSet, setCharSet] = useState('')
  const [streak, setStreak] = useState(0)
  const [streakMax, setStreakMax] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setRandomCharacter()
  }, [])

  const setRandomCharacter = () => {
    const randomizer = Math.floor(Math.random() * hiragana.length)
    setCurrentCharacter(randomizer)
  }

  const handleSubmit = () => {
    if (input.toLowerCase() === hiragana[currentCharacter].romanji) {
      setStreak(streak + 1)
      setStreakMax(Math.max(streak, streakMax))

      setMessage('You are correct')
      setRandomCharacter()
    } else {
      alert(
        `Sorry that was incorrect! it was ${hiragana[currentCharacter].romanji}`
      )

      setStreak(0)
      setRandomCharacter()
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text>Test your knowledge of Japanese characters</Text>

        <View style={styles.characterContainer}>
          <Text style={styles.characterText}>
            {hiragana[currentCharacter].hiragana}
          </Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{message}Text here</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Romanji"
            onChangeText={(text) => setInput(text)}
            required
            style={styles.input}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonOutline} onPress={handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.stats}>
        <Text style={styles.statBox}>Streak: {streak}</Text>
        <Text tyle={styles.statBox}>Best streak: {streakMax}</Text>
      </View>
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
    width: '100%',
    padding: 20,
    alignContent: 'center',
    textAlign: 'center',
  },
  inputContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  characterContainer: {
    margin: 20,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  characterText: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 200,
    textAlign: 'center',
  },
  button: {
    margin: 30,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonText: {
    padding: 5,
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },
  statBox: {
    paddingHorizontal: 5,
  },
})

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
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

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.toLowerCase() === hiragana[currentCharacter].romanji) {
      setStreak(streak + 1)
      setStreakMax(Math.max(streak, streakMax))
    }
  }

  return (
    <View style={styles.container}>
      <Text>Hello {currentCharacter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

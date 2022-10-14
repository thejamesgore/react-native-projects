import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import hiragana from './japanese/Characters'

export default function App() {
  // Declaring our states

  const [input, setInput] = useState('')
  const [currentCharacter, setCurrentCharacter] = useState(0)
  const [streak, setStreak] = useState(0)
  const [error, setError] = useState(false)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'

export default function App() {
  useEffect(() => {
    // load()
  }, [])

  // async funcion load(){
  //   try {
  //     let { } = await Location.requestForegroundPermissionsAsync

  //     if(status !=)
  //   } catch (error){

  //   }
  // }

  return (
    <View style={styles.container}>
      <Text>Weather App</Text>
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

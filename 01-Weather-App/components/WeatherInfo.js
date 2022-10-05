import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WeatherInfo = ({ weather }) => {
  const {
    main: { temp },
  } = weather

  return (
    <View>
      <Text>{temp}</Text>
    </View>
  )
}

export default WeatherInfo

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
  },
})

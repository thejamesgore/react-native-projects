import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const WeatherInfo = ({ weather }) => {
  const {
    main: { temp },
    weather: [details],
  } = weather

  const { icon } = details
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

  return (
    <View style={styles.weatherInfo}>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text>{temp}</Text>
    </View>
  )
}

export default WeatherInfo

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
})

import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../utils/index'

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors

const WeatherInfo = ({ weather }) => {
  const {
    main: { temp },
    weather: [details],
    name,
  } = weather

  const { icon, main, description } = details
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text>{temp}</Text>
      <Text style={styles.weatherDescritpion}>{description}</Text>
      <Text>{main}</Text>
    </View>
  )
}

export default WeatherInfo

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
  },
  weatherDescritpion: {
    textTransform: 'capitalize',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
})

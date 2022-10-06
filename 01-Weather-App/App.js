import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'
import { API_KEY } from '@env'
import axios, { Axios } from 'axios'

import UnitsPicker from './components/UnitsPicker'
import ReloadIcon from './components/ReloadIcon'
import WeatherInfo from './components/WeatherInfo'
import WeatherDetails from './components/WeatherDetails'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState('metric')

  useEffect(() => {
    callApi()
  }, [units])

  const callApi = () => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})

      const { latitude, longitude } = location.coords
      setLocation(location)

      const weatherURL = `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${units}&appid=${API_KEY}`

      axios({
        method: 'get',
        url: weatherURL,
      }).then((response) => {
        setWeather(response.data)
      })

      if (!weather) {
        setErrorMsg(`Error calling the API`)
      }
    })()
  }

  let text = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location)
  }

  if (weather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitsPicker units={units} setUnits={setUnits} />
          <ReloadIcon callApi={callApi} />
          <WeatherInfo weather={weather} />
        </View>
        <WeatherDetails weather={weather} units={units} />
      </View>
    )

    //
    // Will return an error message if problem with API call
    //
  } else if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    justifyContent: 'center',
    flex: 1,
  },
})

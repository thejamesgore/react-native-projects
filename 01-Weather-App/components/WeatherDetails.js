import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils/index'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors

export default function WeatherDetails({ weather, units }) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = weather

  const windSpeed =
    units == 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} mph`

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="speedometer"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Air Pressure</Text>
              <Text style={styles.textSecondary}>{pressure} hPa</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Wind</Text>
              <Text style={styles.textSecondary}>{windSpeed}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Feels like</Text>
              <Text style={styles.textSecondary}>{feels_like}??</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="water"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Humidity</Text>
              <Text style={styles.textSecondary}>{humidity} %</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: 'auto',
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
  weatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItems: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textSecondary: {
    fontSize: 15,
    color: SECONDARY_COLOR,
    fontWeight: '700',
    margin: 7,
  },
})

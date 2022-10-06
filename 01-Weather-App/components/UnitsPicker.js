import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-community/picker'

const UnitsPicker = ({ units, setUnits }) => {
  return (
    <View>
      <Picker
        selectedValue={units}
        onValueChange={(item) => setUnits(item)}
        mode="dropdown"
        itemStyle={{ fontSize: 12 }}
      >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  )
}

export default UnitsPicker

const styles = StyleSheet.create({})

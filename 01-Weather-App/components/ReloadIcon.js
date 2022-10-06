import React from 'react'
import { StyleSheet, Platform, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../utils/index'

export default function ReloadIcon({ callApi }) {
  const reloadIconName = Platform.OS == 'ios' ? 'ios-refresh' : 'md-refresh'
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={callApi}
        name={reloadIconName}
        size={24}
        color={colors.PRIMARY_COLOR}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  reloadIcon: {
    position: 'absolute',
    top: 70,
    right: 20,
  },
})

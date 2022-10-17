import { StyleSheet, Text, View, Linking } from 'react-native'
import { barCodeScanner } from 'expo-barcode-scanner'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Scanner = () => {
  const [hasCamera, setHasCamera] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { status } = await barCodeScanner.requestPermissionsAsync()
      setHasCamera(status === 'granted')
    })()
  }, [])

  const handleScan = ({ type, data }) => {}

  return (
    <View>
      <Text>Scanner</Text>
    </View>
  )
}

export default Scanner

const styles = StyleSheet.create({})

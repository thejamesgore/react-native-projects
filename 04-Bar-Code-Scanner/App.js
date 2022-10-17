import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Linking, Alert } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions()
  }, [])

  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err))
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    Alert.alert('Scan Successful', `${data}`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Open Link',
        onPress: () => openURL(data),
      },
    ])
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      {/* <Modal></Modal> */}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
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

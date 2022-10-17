import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.buttonContainer}>
      <Text>Hello</Text>
      <Button
        onPress={() => navigation.navigate('Scanner')}
        title="Scan QR Code"
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
  },
})

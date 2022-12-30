import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30, backgroundColor: '#000' }}>
      <WebView source={{ uri: 'https://lightning-wallet.vercel.app/' }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

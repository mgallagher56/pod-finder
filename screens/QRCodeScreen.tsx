import * as React from 'react';
import { StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function QRCodeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Code</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/QRCodeScreen.tsx" subtitle="Scan this QR code to open your pod" />
      <View style={{
          margin: 50,
      }}>
        <QRCode size={200} value="Open sesame" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function HomeScreen() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');


  return (
    <View style={styles.container}>
        <Image
                source = {require('../assets/images/logo.png')}
                style = {{
                    width: '70%',
                    resizeMode: 'contain' 
                }}
            />
      <Text style={styles.title}>Home </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo title='Welcome to the Pampa Pod app' subtitle=''></EditScreenInfo>
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
  input: {
    width: '75%',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
});

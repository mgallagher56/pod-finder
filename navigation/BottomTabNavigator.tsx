import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, KeyboardAvoidingView, StyleSheet } from 'react-native';
import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import FindAPodScreen from '../screens/FindAPodScreen';
import QRCodeScreen from '../screens/QRCodeScreen';
import { BottomTabParamList, HomeParamList, FindAPodParamList, QRCodeParamList } from '../types';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState('');
  const [loggedIn, setLogIn]    = React.useState(false);

  return (
    <View style={{
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    }}>
        <View style={{
            display: loggedIn ? "flex" : "none",
            position: 'absolute',
            height: '100%',
            width: '100%',
        }}>

            <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Find A Pod"
                component={FindAPodNavigator}
                options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="QR Code Test"
                component={QRCodeNavigator}
                options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            </BottomTab.Navigator>
        </View>
        <KeyboardAvoidingView 
            style={{
                display: loggedIn ? "none" : "flex",
                position: 'absolute',
                height: '100%',
                width: '100%',
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            behavior='padding'
            >
            <EditScreenInfo title="Pampa Pods" subtitle="Log in to find and open pods" />
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <TextInput
            style={styles.input}

            placeholder='Username'
            onChangeText={ (username) => {
                setUsername(username);                
                }}
            defaultValue={username}
            />
            <TextInput
            style={styles.input}
            secureTextEntry = {true}
            placeholder='Password'
            onChangeText={ (password) => {
                setPassword(password);                
                }}
            defaultValue={password}
            />
            <Button
                title='Login'
                onPress={ () => {
                    setUsername(username);
                    setPassword(password);

                    if( username === 'Admin' && password === 'password' ) {
                        setLogIn(true);
                    }
                }} 
            />
            <Text>{errorMsg}</Text>
        </KeyboardAvoidingView>
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
    marginBottom: 20,
  },
});

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{ headerTitle: 'Pampa Pods' }}
      />
    </HomeStack.Navigator>
  );
}

const FindAPodStack = createStackNavigator<FindAPodParamList>();

function FindAPodNavigator() {
  return (
    <FindAPodStack.Navigator>
      <FindAPodStack.Screen
        name="Find A Pod Screen"
        component={FindAPodScreen}
        options={{ headerTitle: 'Pampa Pods' }}
      />
    </FindAPodStack.Navigator>
  );
}


const QRCodeStack = createStackNavigator<QRCodeParamList>();

function QRCodeNavigator() {
  return (
    <QRCodeStack.Navigator>
      <QRCodeStack.Screen
        name="QR Code"
        component={QRCodeScreen}
        options={{ headerTitle: 'Pampa Pods' }}
      />
    </QRCodeStack.Navigator>
  );
}

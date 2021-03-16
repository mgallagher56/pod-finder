import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import FindAPodScreen from '../screens/FindAPodScreen';
import QRCodeScreen from '../screens/QRCodeScreen';
import { BottomTabParamList, HomeParamList, FindAPodParamList, QRCodeParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
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
  );
}

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

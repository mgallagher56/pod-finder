import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function FindAPodScreen() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
            <View style={styles.textContainer}>
                <EditScreenInfo path="/screens/FindAPodScreen.tsx" subtitle="Enter location to search" />
                <TextInput style={styles.input} placeholder={'location'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%'
    },
    textContainer: {
        width: '100%',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        width: '50%',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    map: {
        width: Dimensions.get('window').width,
        height: '90%',
    },
});

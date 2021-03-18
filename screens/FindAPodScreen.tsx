import * as React from 'react';
import { StyleSheet, Dimensions, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { GOOGLE_API_KEY } from "react-native-dotenv";

import { Text, View } from '../components/Themed';
import { mapData } from '../mapData';

export default function FindAPodScreen() {
    const _map = React.useRef(null);
    const latitudeDeltaInitial = 0.25;
    const longitudeDeltaInitial = 0.25;
    const [region, setRegion] = React.useState({
        latitudeDelta: latitudeDeltaInitial,
        longitudeDelta: longitudeDeltaInitial,
        latitude: 54.5977151700977,
        longitude: -5.9299603236191
    });

    let searchText: any;

    return (
        <View>
            <MapView
                style={styles.map}
                region={region}>
                {mapData.map((data: any) => {
                    return <Marker
                        title={data.title}
                        description={data.address}
                        coordinate={{ latitude: data.latitude, longitude: data.longitude }}
                        image={require('../assets/images/logo-map-icon.png')}
                        key={data.title}
                    />
                })
                }
            </MapView>
            <View style={{ position: 'absolute', top: 0, width: '100%' }}>
                <GooglePlacesAutocomplete
                    ref={(c) => (searchText = c)}
                    placeholder={'Enter Location'}
                    minLength={2}
                    fetchDetails={true}
                    styles={{
                        textInputContainer: styles.textContainer,
                        textInput: {
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16,
                            width: 100,
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb',
                        },
                    }}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        // searchText.setAddressText(details?.formatted_address);

                        setRegion(prevState => ({ 
                            ...prevState,
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                        }))
                    }}
                    query={{
                        key: 'AIzaSyAykd9G34qFbb7rMR0rrhJ_bd-PbNh31PY',
                        language: 'en',
                        components: 'country:uk',
                    }}
                />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        width: '100%',
        marginVertical: 10,
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
        position: 'relative',
        height: '100%'
    },
});

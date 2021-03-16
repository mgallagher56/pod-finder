import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: '/',
            },
          },
          FindAPod: {
            screens: {
              FindAPodScreen: 'find',
            },
          },
          QRCode: {
            screens: {
              QRCodeScreen: 'open',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

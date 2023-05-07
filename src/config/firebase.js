import {initializeApp} from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBP3iIwXHjUqSRI1rJAA3iDNpEywEKKgFo',
  authDomain: 'org-cesta-app.firebaseapp.com',
  projectId: 'org-cesta-app',
  storageBucket: 'org-cesta-app.appspot.com',
  messagingSenderId: '1008658925251',
  appId: '1:1008658925251:web:d855b3eae74fcc81508476',
  measurementId: 'G-GS73YER7DK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export {auth};

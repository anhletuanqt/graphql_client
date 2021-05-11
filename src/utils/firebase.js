import { FirebaseAuthProvider } from 'react-admin-firebase';

const firebaseOptions = {
  // Enable logging of react-admin-firebase
  // logging: true,
  // Authentication persistence, defaults to 'session', options are 'session' | 'local' | 'none'
  persistence: 'session',
};

const firebaseConfig = {
  apiKey: 'AIzaSyDuK9md-3ZprMzxqOXsZvmjUJnkiW3w6ow',
  authDomain: 'i12-mall.firebaseapp.com',
  projectId: 'i12-mall',
  storageBucket: 'i12-mall.appspot.com',
  messagingSenderId: '422989649215',
  appId: '1:422989649215:web:1992bec0383ae9e660ef8a',
  measurementId: 'G-TSCGW1Y7RZ',
};

// This defines the AuthProvider first
export const fbAuthProvider = FirebaseAuthProvider(
  firebaseConfig,
  firebaseOptions
);

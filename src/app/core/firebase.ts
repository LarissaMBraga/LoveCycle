
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAgKdGySRqjI3HDKiLTHxhPIDCdjvaj9a8',
  authDomain: 'lovecycle-90966.firebaseapp.com',
  projectId: 'lovecycle-90966',
  storageBucket: 'lovecycle-90966.firebasestorage.app',
  messagingSenderId: '209933328592',
  appId: '1:209933328592:web:502b1baa22158991953ed5',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

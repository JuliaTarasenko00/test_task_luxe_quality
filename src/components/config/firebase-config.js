import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const AUTHDOMAIN = import.meta.env.AUTHDOMAIN;

const MESSAGINGSENDERID = import.meta.env.MESSAGINGSENDERID;
const APPID = import.meta.env.APPID;
const MEASUREMENTID = import.meta.env.MEASUREMENTID;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: AUTHDOMAIN,
  databaseURL: 'https://rentzila-408d3-default-rtdb.firebaseio.com',
  projectId: 'rentzila-408d3',
  storageBucket: 'rentzila-408d3.appspot.com',
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID,
};

export const app = initializeApp(firebaseConfig);

export const database = getDatabase();
export const storage = getStorage();

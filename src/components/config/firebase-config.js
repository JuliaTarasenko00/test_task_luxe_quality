import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const AUTHDOMAIN = import.meta.env.AUTHDOMAIN;
const STORAGEBUCKET = import.meta.env.STORAGEBUCKET;
const MESSAGINGSENDERID = import.meta.env.MESSAGINGSENDERID;
const APPID = import.meta.env.APPID;
const MEASUREMENTID = import.meta.env.MEASUREMENTID;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: AUTHDOMAIN,
  databaseURL: 'https://rentzila-408d3-default-rtdb.firebaseio.com',
  projectId: 'rentzila-408d3',
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID,
};

export const app = initializeApp(firebaseConfig);

export const database = getDatabase();

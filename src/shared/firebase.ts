// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDVCcNT4R0u48VR6mWb8qcufVauisNZxjo',
  authDomain: 'tama-blog-site.firebaseapp.com',
  projectId: 'tama-blog-site',
  storageBucket: 'tama-blog-site.appspot.com',
  messagingSenderId: '799683246628',
  appId: '1:799683246628:web:3f02dd0ad6af177cd236b1',
  measurementId: 'G-PCXJSS6QZH'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Analytics and get a reference to the service
export const analytics = getAnalytics(app);

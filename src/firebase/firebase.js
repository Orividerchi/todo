import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD4L1Mnu-OT_QyXZqiA05bYVpW9GWDVbcs',
  authDomain: 'diplom-9b149.firebaseapp.com',
  databaseURL: 'https://diplom-9b149.firebaseio.com',
  projectId: 'diplom-9b149',
  storageBucket: 'diplom-9b149.appspot.com',
  messagingSenderId: '925902857596',
};
const app = firebase.initializeApp(config);

export default app;

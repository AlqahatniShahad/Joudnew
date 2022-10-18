import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import storage from 'firebase/storage';

const firebaseConfig = {
  
  apiKey: "AIzaSyAgc4JDpW_DGjnuP_OwPFJjILI51ZOx3rw",
  authDomain: "joud-c086e.firebaseapp.com",
  databaseURL: "https://joud-c086e-default-rtdb.firebaseio.com",
  projectId: "joud-c086e",
  storageBucket: "joud-c086e.appspot.com",
  messagingSenderId: "43995250095",
  appId: "1:43995250095:web:a9845835915056da71035a"

  // apiKey: "AIzaSyA4q8Mz7N4AuM-zjIYY0FLIaxTao9ILIVc",
  // authDomain: "fir-auth-bd1e8.firebaseapp.com",
  // projectId: "fir-auth-bd1e8",
  // storageBucket: "fir-auth-bd1e8.appspot.com",
  // messagingSenderId: "802049555533",
  // appId: "1:802049555533:web:9372f0bd237c61d6203004"

  // apiKey: "AIzaSyBi95VXuBtiSBGS-PWvlNyuytar8EaY8uo",
  // authDomain: "joudtest.firebaseapp.com",
  // databaseURL: "https://joudtest-default-rtdb.firebaseio.com",
  // projectId: "joudtest",
  // storageBucket: "joudtest.appspot.com",
  // messagingSenderId: "786053435789",
  // appId: "1:786053435789:web:528795322675f41106adc4",
  // measurementId: "G-FQDJNHV624"

  // apiKey: "AIzaSyBTxHgGGKeRy8RWGWMwseB4rUhsWL_oKbA",
  // authDomain: "joud-98138.firebaseapp.com",
  // projectId: "joud-98138",
  // storageBucket: "joud-98138.appspot.com",
  // messagingSenderId: "332515043054",
  // appId: "1:332515043054:web:6f83991f53f2c173b8f5ff"
  
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db =getFirestore(app);


  /*//
   // apiKey: "AIzaSyBi95VXuBtiSBGS-PWvlNyuytar8EaY8uo",
  authDomain: "joudtest.firebaseapp.com",
  // databaseURL: "https://joudtest-default-rtdb.firebaseio.com",
  // projectId: "joudtest",
  // storageBucket: "joudtest.appspot.com",
  // messagingSenderId: "786053435789",
  // appId: "1:786053435789:web:528795322675f41106adc4",
// measurementId: "G-FQDJNHV624"}*/
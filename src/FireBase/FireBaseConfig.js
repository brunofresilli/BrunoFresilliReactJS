
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD7KhfziMPVLqHzGoQn2GvyMOxlnYRnLK8",
  authDomain: "sneakersshop-155c1.firebaseapp.com",
  projectId: "sneakersshop-155c1",
  storageBucket: "sneakersshop-155c1.appspot.com",
  messagingSenderId: "172716481503",
  appId: "1:172716481503:web:2dae6d4764a7ccce3b826a"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
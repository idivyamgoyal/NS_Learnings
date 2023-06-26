import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB8Aq7dSL7QV9t2rRyom3Bpj1y5VOQE8Zc",
  authDomain: "ns-todoapp-batchaug2021.firebaseapp.com",
  projectId: "ns-todoapp-batchaug2021",
  storageBucket: "ns-todoapp-batchaug2021.appspot.com",
  messagingSenderId: "910904372259",
  appId: "1:910904372259:web:b2ea4cc33626a0cf0f5596",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export const firebaseDB = () => getFirestore(app);

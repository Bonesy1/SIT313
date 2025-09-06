import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup as firebaseSignInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCdE3BdIg2_ullqvp9d-XvK-vt7CxB8l00",
  authDomain: "sit313webproj.firebaseapp.com",
  projectId: "sit313webproj",
  storageBucket: "sit313webproj.firebasestorage.app",
  messagingSenderId: "847722216715",
  appId: "1:847722216715:web:a359c81dc708b3be10b60e",
  measurementId: "G-BEH3EP8LHE"
};


const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const signInWithPopup = () => signInWithPopup(auth, provider);
const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export {firebaseApp, analytics, auth, signInWithPopup };

export const createUserDocFromAuth = async(userAuth, additionalInfo = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        } 
    }
    return userDocRef;  
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userDocRef = await createUserDocFromAuth(userCredential.user);
        return userDocRef;
    } catch (error) {
        console.log('error creating user', error.message);
    }
};
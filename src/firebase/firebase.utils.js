import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyASRjjU4KHBZnz2PDgxlRqQYprysVwEscM",
    authDomain: "cbi-intranet.firebaseapp.com",
    projectId: "cbi-intranet",
    storageBucket: "cbi-intranet.appspot.com",
    messagingSenderId: "471825400147",
    appId: "1:471825400147:web:06e1e6ced1a875092f61a6",
    measurementId: "G-E2H4L1NLFG"
};

firebase.initializeApp(config);

export const createUserProfile = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createDate = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createDate,
                ...additionalData
            })
        } catch( error ) {
            console.log(error)
        }

    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


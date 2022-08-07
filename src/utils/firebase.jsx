// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//? register a new user-- goes to Register component
export const createUser = async (name, email, password, navigate) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential;
        sessionStorage.setItem("user", user.accessToken);
        user.user.displayName = name;
        console.log(user);
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};
//? ////////////////////////////////////////////

export const logOut = (navigate) => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            sessionStorage.removeItem("user")
            navigate("/login")
        })
        .catch((error) => {
            // An error happened.
        });
};

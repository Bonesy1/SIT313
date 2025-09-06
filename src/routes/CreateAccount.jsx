import React from 'react'
import { Header, Radio, Grid, GridColumn, GridRow, Form, FormField, TextArea, FormInput, FormButton, Button} from 'semantic-ui-react'
import { BrowserRouter } from 'react-router'
import ConfirmButton from '../ConfirmButton.jsx'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp, createUserDocFromAuth } from '../utils/firebase.js';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const logGoogleUser = async(user) => {
    const response = await signInWithPopup(auth, new GoogleAuthProvider());
    console.log(response);
    const userDocRef = await createUserDocFromAuth(response.user);
    console.log(userDocRef);
}


function CreateAccount() {
    
    const [contact, setContact] = React.useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        if (contact.password !== contact.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const userDocRef = await createUserWithEmailAndPassword(auth, contact.email, contact.password);
            await createUserDocFromAuth(userDocRef.user, { displayName: contact.displayName });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    };

    const{displayName, email, password, confirmPassword} = contact;
    console.log(contact);

    return (
        <>
            <Header as='h3' block style={{ margin: '1rem' }}>
                Create a DEV@Deakin Account
            </Header>
            <Form style={{ margin: '1rem' }}>
                <Form.Input placeholder='Name' type='text' value={contact.displayName} onChange={handleChange} name='displayName' />
                <Form.Input placeholder='Email' type='email' value={contact.email} onChange={handleChange} name='email' />
                <Form.Input placeholder='Password' type='password' value={contact.password} onChange={handleChange} name='password' />
                <Form.Input placeholder='Confirm Password' type='password' value={contact.confirmPassword} onChange={handleChange} name='confirmPassword' />

            </Form>

            <Button onClick={() => { handleSubmit(); }} >Create Account</Button>
            <p>Or</p>
            <Button onClick={() => { logGoogleUser(); }}>Sign in with Google</Button>
        </>
    );
}

export default CreateAccount;
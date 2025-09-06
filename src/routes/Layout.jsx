import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import MenuHeader from '../MenuHeader.jsx'
import { Outlet, Link } from 'react-router'
import {
  SidebarPusher,
  SidebarPushable,
  MenuItem,
  GridColumn,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  FormField,
  FormInput,
  FormButton,
  Form,
    Button,
} from 'semantic-ui-react'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from '../utils/firebase.js';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const auth = getAuth(firebaseApp);



const logGoogleUser = async(user) => {
    const response = await signInWithPopup(auth, new GoogleAuthProvider());
    console.log(response);
    const userDocRef = await createUserDocFromAuth(response.user);
    console.log(userDocRef);
}

function Navbar() {
    const [visible, setVisible] = React.useState(false)
    return (
        <div style={{ width: '100%' }}>

            <SidebarPushable style={{ minHeight: '100vh', borderRadius: 0 }}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
                    width='very wide'
                    style={{ position: 'fixed', top: 0, left: 0, height: '100vh', zIndex: 2000 }}
                >
                    <MenuItem>
                        <Link to='/home' onClick={() => setVisible(false)}>
                            <Icon name='home' />
                            <p>Home</p>
                            
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Icon name='sign-in' />
                        <p>Login</p>
                        <Form>
                            <FormInput placeholder='Email' type='email'/>
                            <FormInput placeholder='Password' type='password'/>
                            <FormButton type='submit' onClick={() => setVisible(false)}>Login</FormButton>
                            <p>Or</p>
                            <Button onClick={() => { logGoogleUser(); setVisible(false); }}>Sign in with Google</Button>
                        </Form>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/createaccount' onClick={() => setVisible(false)}>
                            <Icon name='signup' />
                            Create Account
                        </Link>
                    </MenuItem>
                </Sidebar>

                <SidebarPusher dimmed={visible} style={{ minHeight: '100vh' }}>

                    <MenuHeader onLoginClick={() => setVisible(true)} />
                    <Outlet/>
                    
                </SidebarPusher>
            </SidebarPushable>
            
        </div>
    )
}

export default Navbar

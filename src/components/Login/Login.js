import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from'firebase/auth';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { firebaseConfig } from './firebaseConfig';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const app = initializeApp(firebaseConfig);
    // const auth = getAuth(app);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    });
    
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const {email, photoURL,displayName} = result.user;
            const newUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
            }
            setUser(newUser);
            setLoggedInUser(newUser);
            storeAuthToken();
            history.replace(from);
        })
    };
    // Firebase Auth Token
    const storeAuthToken = () =>{
        auth.currentUser.getIdToken(true)
        .then(function(idToken) {
            console.log({idToken});
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }
    return (

            <div className="container">
              <div className="row">
                <div className="col-4 offset-4 border pb-5 shadow">
                <div>
                  <h2 className="text-center mb-4">Login With</h2>
                  <button className="btn btn-danger form-control mt-4 mb-3" onClick={handleSignIn}>Google</button>
                  <h5 className='text-center'>Don't have an account? <a href="#">Click Here</a></h5>
                </div>
                </div>
              </div>
            </div>
        
    );
};

export default Login;
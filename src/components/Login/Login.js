import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import logo from '../../images/logo2.png';
import ImageSlider from "../ImageSlider/ImageSlider";
import firebaseConfig from "./firebase.config";
import './Login.css';

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const [newUser, setnewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn:false,
    name:'',
    email:'',
    password:'',
    photo:''
  });

  
const [loggedInUser, setLoggedInUser]=useContext(UserContext);
let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };
 
  
  var provider = new firebase.auth.GoogleAuthProvider();
  const hendlesingin=()=>{
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const { displayName, email } = result.user;
    const singedInUser = { name: displayName, email }
    setLoggedInUser(singedInUser)
    history.replace(from);
  }).catch((error) => {
    console.log(error.message)
  });
  }


  const handleSingOut=()=>{
    firebase.auth().signOut()
    .then((result) => {
      const singedOutUser={
    isSignedIn:false,
    name:'',
    email:'',
    photo:'',
    error:'',
    success:false
      }
      setUser(singedOutUser);
    }).catch((error) => {
      // An error happened.
    });
  }



  const handleBlur=(e)=>{
    let isFromValid=true;
    if(e.target.name==='email'){
     isFromValid= /\S+@\S+\.\S+/.test(e.target.value);
    
    }
    if(e.target.name ==='password'){
    const isPasswordValid= e.target.value.length>8;
    const passwordHash= /\d{1}/.test(e.target.value);
    isFromValid=isPasswordValid && passwordHash;
    }
    if(isFromValid){
      const newUserInfo={...user};
      newUserInfo[e.target.name]=e.target.value;
      setUser(newUserInfo);
    }
    }
    const handleSubmit=(e)=>{
    if(newUser&&user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((res) => {
      const newUserInfo={...user};
      newUserInfo.error='';
      newUserInfo.success=true;
      setUser(newUserInfo);
      UpdateUserName(user.name);
      })
      .catch((error) => {
        const newUserInfo={...user};
        newUserInfo.error=error.message;
        newUserInfo.success=false;
        verifyEmail();
        setUser(newUserInfo);
         
      });
    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((res) => {
      const newUserInfo={...user};
      newUserInfo.error='';
      newUserInfo.success=true;
      setUser(newUserInfo);
      history.replace(from);
      console.log('SingIn  User Info ',res.user);
      })
      .catch((error) => {
        const newUserInfo={...user};
        newUserInfo.error=error.message;
        newUserInfo.success=false;
        setUser(newUserInfo);
      });
    }
    
    e.preventDefault();
    }

const UpdateUserName =name=>{
  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name

  }).then(() => {
    console.log('User Name Updated Successfully')
  }).catch((error) => {
    
  });  
}
const verifyEmail=()=>{
  firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    // Email verification sent!
    // ...
  });
}

const resetpassword=email=>{
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
   console.log(errorMessage,errorCode)
  });
}

  const mystyle = {
    marginLeft:'12rem',
    marginBottom:'1rem',
  };
 return (
  <div className="gg">
   <div className="col-md-7">
   
    <col-md-6></col-md-6>
  <form onSubmit={handleSubmit}>
  <div class="loginpage" >        
  <div id="login-box">
  <div class="left">
     <img src ={logo}
      width="180"
      height="70"
      style={mystyle}
      alt=""></img>
    <h1>Sign up</h1>
   {newUser&&<input onBlur={handleBlur} type="text" name="name" placeholder="Your Name" required />}
    <input onBlur={handleBlur} type="text" name="email" placeholder="E-mail" required />
    <input onBlur={handleBlur} type="password" name="password" placeholder="Password" required />
    <input type="password" name="password2" placeholder="Retype password" />
    
    <input type="submit" name="signup_submit" value={newUser?'Sing me UP':'Sing In'} />
    <br/><button onClick={()=>resetpassword(user.email)}>Forget password</button>
   
    {user.success && <p style={{color:'green'}}>User {newUser?'Created' :'Logged In'} success</p>}
  </div>
  <img  src ="https://i.imgur.com/GhDBOwf.png"></img>
  <div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
    
    <button class="social-signin facebook">Log in with facebook</button>
    <button class="social-signin twitter">Log in with Twitter</button>
    <button onClick={hendlesingin} class="social-signin google">Log in with Google+</button>
    <div> <label className="Label" onClick={()=>setnewUser(!newUser)} type="submit" name ="newUser" value="">Create your New Account ?</label><br/><br/>
    <p style={{color:'red'}}>{user.error}</p></div>
  </div>
  <img style={{marginLeft:'500px'}} src ="https://i.imgur.com/Q3ZA9F6.png"></img>
</div>



{/* <img src="https://img.freepik.com/free-vector/people-dining-asian-restaurant-men-women-eating-noodles-drink-tea_107791-4542.jpg?size=626&ext=jpg&ga=GA1.2.1976963988.1627171200"width="600"
height="530" alt='10-hot-onion-restaurent-resources' /> */}

</div>
</form>
</div>

<div className="col-md-5">
<ImageSlider></ImageSlider>
</div>
</div>
);
};

export default Login;
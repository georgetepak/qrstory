import React, { useState, useEffect } from "react";
import { auth, provider } from "../../SetUp/firebase.js";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  
  const[User, SetUser] = useState(null)

  const Sign = async () => {
    try {
      SetUser(await signInWithPopup(auth, provider));

    } catch (error) {

      SetUser('Error signing in with Google'+ error);
    }
  };


 return(
  <>
  {
    User? 
    (<>
    <h1>Hello mr. {User.user.displayName}</h1>
    <p>Your email is {User.user.email}</p>
    </>)
     :
    (<button onClick={Sign}>Sign with Google</button>)
  }
  {User? console.log(JSON.stringify(User)): null}
  </>
 );

};

export default Login;

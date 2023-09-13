import React from 'react'
import { userAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const SignOut = () => {

     const {logOut}=userAuth()
     const Navigate = useNavigate();
    const handleSignOut = async () => {
        try {
          await logOut();
        } catch (err) {
          console.log(err);
        }
        Navigate("/");
      };

    return (
    <button onClick={handleSignOut}>
        Sing-Out
    </button>
  )
}

export default SignOut
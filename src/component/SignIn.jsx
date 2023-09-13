import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";



const SignIn = () => {
    const Navigate = useNavigate();
    const { googleSignIn } = userAuth();
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
        Navigate("/account");
      } catch (err) {
        console.log(err);
      }
    };
    return (
    <button onClick={handleGoogleSignIn}>Sign-In</button>
  )
}

export default SignIn
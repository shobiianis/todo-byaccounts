import { userAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
    <div>
      <button onClick={handleGoogleSignIn}>Google Sign in </button>
    </div>
  );
};

export default Home;

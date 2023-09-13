import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import Account from "../pages/Account"
import { AuthContextProvider } from "../context/AuthContext"
import ProtectedRoutes from "./protectedRoutes"

const AppRouter = () => {
  return (
<AuthContextProvider>

    <Router>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<ProtectedRoutes>
          <Account/>
        </ProtectedRoutes>} />
   </Routes>

    </Router> 
</AuthContextProvider>
     )
}

export default AppRouter
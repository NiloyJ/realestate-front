import { Outlet } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import useFirebase from "../../hook/useFirebase";
import Login from "../Join/Login/Login";

// const useAuth = () =>{
//     const user = {loggedIn: false}
//     return user && user.loggedIn;
// }

const PrivateRoute = () =>{
    const { signInUsingGoogle, user, logout } = useAuth()
    const isAuth = useAuth()
   return user?.email ? <Outlet/> : <Login/>
}

export default PrivateRoute;
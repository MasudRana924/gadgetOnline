import { useContext } from "react";
import { authContext } from "../COntext/AuthProvider";



const useAuth = () => {
    return useContext(authContext)
};

export default useAuth;
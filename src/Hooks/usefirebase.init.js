import { initializeApp } from "firebase/app";
import firebaseConfig from "./useFirebase";
const initializeAuthentication=()=>{
    initializeApp(firebaseConfig)
}
export default initializeAuthentication
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword,  signOut, updateProfile } from "@firebase/auth"
import axios from "axios"
import { useContext } from "react"
import { Action } from "../context/Action"
import { Context } from "../context/Context"
import { auth} from "../firebase/firebase"

const useFirebase = () =>{
    const {dispatch, url, user} = useContext(Context)
const logOut = async () =>{
    dispatch({type:Action.loaderOn})
    await signOut(auth).then(()=>  window.location.replace('/')).finally(()=>  dispatch({type:Action.loaderOff}))
    dispatch({type:Action.adminOff})
}
const signUp = async (email, password, username) =>{
    dispatch({type:Action.loaderOn});
    await createUserWithEmailAndPassword(auth, email, password)
    .then(user => updateProfile(auth.currentUser, {displayName: username})
    .then(user => dispatch({type:Action.logIn, payload:user }) ))
    .then(async user => console.log(user))
    .catch(err=> console.log(err))
    .finally(()=> dispatch({type:Action.loaderOff}))
}
const signIn = async (email, password) =>{
    dispatch({type:Action.loaderOn});
    await signInWithEmailAndPassword(auth, email, password)
    .then(user => dispatch({type:Action.logIn, payload:user }))
    .catch(err=>console.log(err)).finally(()=> dispatch({type:Action.loaderOff}))
    ///mongodb
    try {
        const res = await axios.get(`${url}/user/${email}`)
        console.log(res, 'hellloooo')
        if(!res.data){
            const newUser = await axios.post(`${url}/user`, {email})
            console.log(newUser);
        }else{
            if(res.data.isAdmin){
                dispatch({type:Action.adminOn})
            }else{
                dispatch({type:Action.adminOff})
            }
        }

    } catch (error) {
        console.log('user error found')
    }
}
return{
    logOut,
    signUp,
    signIn

}
}
export default useFirebase
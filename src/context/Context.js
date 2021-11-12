import {  onAuthStateChanged } from "@firebase/auth"
import axios from "axios"
import { createContext, useEffect, useReducer } from "react"
import { auth } from "../firebase/firebase"
import { Action } from "./Action"
import { Reducer } from "./Reducer"


const INITIAL_STATE ={
    isLoading:true,
    user:null,
    url:'https://car101.herokuapp.com/api',
    cars:[],
    isAdmin:false,
    reviews:[],
   
}

export const Context = createContext(INITIAL_STATE)

export const Contextrovider = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
    const {isLoading, user, url, cars, isAdmin, reviews} = state
    useEffect(()=>{
        const authChecker = async () =>{
            onAuthStateChanged(auth, async user=>{
                if(user){
                    dispatch({type:Action.logIn, payload:user})
                    dispatch({type:Action.loaderOff})
                    try {
                        const res = await axios.get(`${url}/user/${user.email}`)
                        if(res.data.isAdmin){
                            dispatch({type:Action.adminOn})
                        }else{
                            dispatch({type:Action.adminOff})
                        }
                    } catch (error) {
                        console.log('user error found')
                    }
          
                }else{
                    dispatch({type:Action.logout})
                    dispatch({type:Action.loaderOff}) 
                }
              
            })
        }
        authChecker();
        //get all the cars
        const getCars = async () =>{
            try {
                const res = await axios.get(`${url}/cars`)
                dispatch({type:Action.getCars, payload:res.data })
            } catch (error) {
                console.log(error)
            }
           
        }
        getCars();
        //get all the reviews
        const getReviews = async () =>{
            try {
                const res = await axios.get(`${url}/reviews`)
                dispatch({type:Action.getReviews, payload:res.data })
            } catch (error) {
                console.log(error)
            }
           
        }
        getReviews();
    }, [])

    return(<Context.Provider value={{
        isLoading,
        user,
        cars, 
        isAdmin,
        reviews,
        url,
        dispatch
    }} >
        {children}
    </Context.Provider>)
}
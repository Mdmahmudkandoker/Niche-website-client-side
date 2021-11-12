import React, { useContext } from 'react'
import { Navigate, Route } from 'react-router'
import { Context } from '../context/Context'


const PrivateRoute = ({children, path}) => {
    const {user, isLoading} = useContext(Context);
    if(isLoading){
        return null
    }
    return user? children : <Navigate to='/login'/>
       
        
       
    
}

export default PrivateRoute

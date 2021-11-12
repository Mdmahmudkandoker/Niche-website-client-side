import { Action } from "./Action"

const {loaderOff, loaderOn, logIn, logout, getCars, adminOff, adminOn, getOrders, getReviews} = Action
export const Reducer = (state, action) =>{
    switch (action.type) {
        case loaderOn:
            return{
                ...state,
                isLoading:true
            }
            case loaderOff:
            return{
                ...state,
                isLoading:false
            }
            case logIn:
                return{
                    ...state,
                    user:action.payload
                }
                case logout:
                    return{
                        ...state,
                        user:null
                    }
                    case getCars:
                        return{
                            ...state,
                           cars:action.payload
                        }
                        case adminOn:
                        return{
                            ...state,
                           isAdmin:true
                        }
                        case adminOff:
                        return{
                            ...state,
                            isAdmin:false
                        }
                
                            case getReviews:
                            return{
                                ...state,
                                reviews:action.payload
                            }
         
    
        default:
           return state
    }
}
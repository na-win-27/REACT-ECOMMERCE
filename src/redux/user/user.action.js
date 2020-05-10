import {userActionTypes} from './useractiontypes'


export const setcurrrentuser=user=>({
    type:userActionTypes.SET_CURRENT_USER,
    payload:user
})
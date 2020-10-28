import {firebase} from '../firebase/config'
import Swal from 'sweetalert2';
import { types } from "../types/types";


export const startLoginEmailPass = (email,password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then( ({user}) =>{
                dispatch( login (user.uid, user.displayName))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Bienvenido',
                    showConfirmButton: false,
                    timer: 2500
                  })   
            } )
            .catch( e =>{
                console.log(e)
                if(e.code === "auth/user-not-found"){
                    e.message = "Usuario incorrecto, por favor revise el email y el password"
                }
                Swal.fire('Error', e.message, 'error' )
            })
    }
}

export const startRegisterWithEmail = (email,password, name) => {
    return (dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then( async({user}) => {
            await user.updateProfile({displayName:name})
            dispatch(login(user.uid, user.displayName))
        })
         .catch( e => {
            Swal.fire('Error', e.message, 'error' )
         })
    }
}

export const startLoggOut = () => {
    return  async (dispatch) =>{
        await firebase.auth().signOut();
        dispatch( logout())
    } 
}


export const login = (uid,displayName) => ({
    type: types.login,
    payload:{
        uid,
        displayName
    }
})

const logout = () => ({
    type: types.logout
})
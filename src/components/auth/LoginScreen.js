import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import validator from "validator";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { startLoginEmailPass } from '../../actions/auth';




export const LoginScreen = () => {

    const dispatch = useDispatch()
    const [formValues, setFormValues] = useState({
        email:'',
        password:''
    })
    const{email,password} = formValues
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        });

    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        if(!validator.isEmail(email)){
            return  Swal.fire("Error", "Ingrese un email valido", "error")
        }
        if(password.length < 7){
            return Swal.fire("Error", "La contraseña debe contener como minimo 7 caracteres", "error")
        }
        
        dispatch(startLoginEmailPass(email,password))
              
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleSubmitForm}>
                    {/* msgError &&
                        (
                        <div className="auth__alert-error">

                            {msgError}

                        </div>
                        )
                    */}    

                    <input 
                        className="auth__input" 
                        type="text"
                        placeholder="Email"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />

                    <input 
                        className="auth__input" 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />

                    <button
                         className="btn btn-primary btn-block"   
                         type="submit"
                         
                    >
                        Login

                    </button>

                    <Link  
                        to="/auth/register"  
                        className="link" 
                        > 
                        Create new account 
                    </Link>

            </form>
        </>
    )
}

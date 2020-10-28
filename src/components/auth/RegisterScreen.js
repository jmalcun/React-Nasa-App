import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startRegisterWithEmail } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();


    const [values, handleInputChange]= useForm({
        fullName:'',
        email:'',
        birthdate:Date(),
        password:'',
        password2:''
    })

    const {fullName,email,birthdate,password,password2} = values;


    const handleSubmit = (e) => {
        e.preventDefault();
        if( isFormValid() ){
            dispatch(startRegisterWithEmail(email,password,fullName))
            Swal.fire('Bienvenido','','success')
        }
        
        
    }

    const isFormValid = () =>{

        let hoy=new Date().getFullYear()
        let nacimiento = birthdate.slice(0,4)
        let edad = hoy - Number(nacimiento)

        if(fullName.trim().length === 0){
            Swal.fire('Error', 'Por favor ingrese su nombre', 'error')
            return false
            
        }
        if( !validator.isEmail(email)){
            Swal.fire('Error', 'Por favor ingrese un Email valido', 'error')
            return false    
        }
        if(edad < 13){
            Swal.fire('Error', 'Debe ser mayor de 13 años para ingresar', 'error')
            return false
        }
        if(password.length < 5){
            Swal.fire('Error', 'La contraseña debe tener minimo 6 caracteres', 'error')
            return false
        }
        if( !validator.isAlphanumeric(password)){
            Swal.fire('Error', 'La contraseña debe ser alfanumerica', 'error')
            return false
        }
        if(password !== password2){
            Swal.fire('Error', 'La contraseña es incorrecta', 'error')
            return false
        }

        return true
        
    }



    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleSubmit} >

                    <label><strong>Name</strong></label>  
                    <input 
                        className="auth__input" 
                        type="text"
                        placeholder="Name"
                        name="fullName"
                        autoComplete="off"
                        value={fullName}
                        onChange={handleInputChange}
                    />

                    <label><strong>Email</strong></label>    
                    <input 
                        className="auth__input" 
                        type="email"
                        placeholder="Email"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />

                    <label><strong>Birthdate</strong></label>
                    <input 
                        className="auth__input" 
                        type="date"
                        name="birthdate"
                        autoComplete="off"
                        value={birthdate}
                        onChange={handleInputChange}
                        
                    />

                    
                    <label><strong>Password</strong></label>
                    <input 
                        className="auth__input" 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />

                    <label><strong>Confirm Password</strong></label>    
                    <input 
                        className="auth__input" 
                        type="password"
                        placeholder="confirm"
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                    />      

                    <button
                         className="btn btn-primary btn-block mb-5"   
                         type="submit"
                    >
                        Register

                    </button>

                    <Link  
                        to="/auth/login"  
                        className="link" 
                        > 
                        alredy register? 
                    </Link>

            </form>
        </>
    )
}
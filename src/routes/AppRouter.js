import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute'
import {firebase} from '../firebase/config'
import { useDispatch } from 'react-redux';
import {login} from '../actions/auth'
import { DashboardRoutes } from './DashboardRoutes';
import { StartGetFotos } from '../actions/foto';


export const AppRouter = () => {

    const dispatch = useDispatch()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [checking, setchecking] = useState(true)

    useEffect( () => {
        firebase.auth().onAuthStateChanged( (user) => {
            if( user?.uid){
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true)
                dispatch(StartGetFotos())
            }else setIsLoggedIn(false)  
            setchecking(false)    
        })
    }, [dispatch,setchecking,setIsLoggedIn])

    if(checking){
        return (
            <div className="auth__main">
                <div className="auth__box-container">
                    <h1 className="auth__title">
                        Loading...
                    </h1>
                </div>
            </div>
        )
    }

    return (

    <Router>
        <div>
            <Switch>
                    <PublicRoute path="/auth" component={AuthRouter} isLoggedIn={isLoggedIn}/>

                    <PrivateRoute path="/" component={DashboardRoutes} isLoggedIn={isLoggedIn} />

                    <Redirect to="/auth/login" />


            </Switch>

        </div>
    </Router>        
    )
}

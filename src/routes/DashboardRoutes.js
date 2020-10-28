import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HomeScreen } from '../components/home/HomeScreen'
import { ImageGalery } from '../components/home/ImageGalery'
import { Navbar } from '../components/home/Navbar'

export const DashboardRoutes = () => {
    return (
        <>

            <Navbar />

            <div className="container mt-2">

                <Switch>

                    <Route exact path="/home" component={ HomeScreen } />

                    <Route exact path="/image/galery" component={ ImageGalery } />


                    <Redirect to="/home" />


                </Switch>
                
            </div>  
            
        </>
    )
}

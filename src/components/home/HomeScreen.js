import React from 'react'
import { useSelector } from 'react-redux'

import { ImageDay } from './ImageDay'


export const HomeScreen = () => {

    const {loading} = useSelector(state => state.fotos)
    console.log(loading)
    

    return (
        <div>
            {
                (!loading)
                    ? <ImageDay />
                    : <h4 className="row justify-content-center">Loading...</h4>
            }
            
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import {  modoFoto, randomFoto } from '../../helpers/array'


export const ImageDay = () => {
 
    const {photos} = useSelector(state => state.fotos)
    const [ foto, setFoto] = useState({})
    
    const fotos=  modoFoto(photos)

    useEffect(() => {
       setFoto(randomFoto(fotos))
    },[setFoto])
    
    
    let {img,roverName,date,id,likes,camName} = foto
    console.log(foto)
    
    const [countLikes, setCountLikes] = useState(false)

    const [cantidad, setCantidad] = useState(0)
    
    const handleClick = () => {
        if(countLikes){
            setCantidad(cantidad -1)
            setCountLikes(!countLikes)
        }else{
            setCantidad(cantidad +1)
            setCountLikes(!countLikes)
        }
    }

    likes=cantidad

    return (
    <>  
        <div className="card mt-5">
            <img className="card-img-top" src={img} alt={camName}  />
            <div className="card text-left">
                <i className={(countLikes) ?"fas fa-heart" :"far fa-heart"} onClick={handleClick}></i>
            </div>
            <div className="card text-right">
                <span className="text-muted">{roverName}</span>
                <span className="text-muted">{date}</span>
                <span className="text-muted">{id}</span>
                <span className="text-muted" > {cantidad} likes</span>          
            </div>     
        </div>   
    </>
)
}


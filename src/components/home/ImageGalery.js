import React, { useState } from 'react'
import { useFetchFotosCur } from '../../hooks/useFetchCur'
import { useFetchFotosOpo } from '../../hooks/useFetchFotos'
import { CuriosityCard } from './CuriosityCard'
import { OportunityCard } from './OportunityCard'

export const ImageGalery = () => {

    const [cameraOpo, setCameraOpo] = useState('pancam')
    const [cameraCur, setCameraCur] = useState('fhaz')
    
    const roverOpo = useFetchFotosOpo(cameraOpo)
    const {camName,data,loaded} = roverOpo
    
    const roverCur = useFetchFotosCur(cameraCur)
    let {camNameC,dataCur,loaded2} = roverCur
   
    const handleChange = (e) => {
        e.preventDefault()
        setCameraOpo(e.target.value)
    }

    const handleChangeCur = (e) => {
        e.preventDefault()
        setCameraCur(e.target.value)
        
    }
      
    return (
        <>  
          <div className="container mt-5">  
                <div className="row"> 
                    <div className="col-10">
                        <h3 className="titulo"> Curiosity: {(!loaded2) &&camNameC}  </h3> 
                    </div>
                    <div className="col-2">
                        <label className="titulo mr-2"> Camera </label>
                        <select name="curiosity" value={cameraCur} onChange={handleChangeCur}>
                            <option value="fhaz">FHAZ</option>
                            <option value="rhaz">RHAZ</option>
                            <option value="mast">MAST</option>
                        </select>
                    </div>
                </div>   
                    <div id="cajon1" className="container-fluid">
                        <div className="row">

                            {
                                (loaded2)
                                    && <div className="row justify-content-center">
                                            <p>Loading...</p>
                                        </div>
                            }
                            {
                                dataCur.map( e => (

                                    <CuriosityCard 
                                        key={e.id}  
                                        {...e}
                                    />

                                ))
                            }
                       
                        </div>
                    </div>    
            </div>

            <hr />

            <div className="container mt-5"> 
                <div className="row"> 
                    <div className="col-10">
                        <h3 className="titulo" >Opportunity: {(!loaded) &&camName}  </h3> 
                    </div>
                    <div className="col-2">
                        <label className="mr-2 titulo"> Camera </label>
                        <select name="oportunity" value={cameraOpo} onChange={handleChange}>
                            <option value="pancam">PANCAM</option>
                            <option value="navcam">NAVCAM</option>
                        </select>
                    </div>
                </div>   
                <div className="container-fluid" >
                    <div className="row row-horizon">

                         {
                             (loaded)
                                && <div className="row justify-content-center">
                                        <p>Loading...</p>
                                    </div>
                         }

                         {

                                 data.map( e => (
                                    <OportunityCard
                                        key={e.id}  
                                        {...e}
                                    />

                            ))              
                        }               
                    </div>
                </div>  
            </div>
            
        </>
    )
}

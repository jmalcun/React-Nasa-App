import React from 'react'

export const CuriosityCard = ( {img,roverName,date,id,likes,camName} ) => {
        

    return (
        <> 
           <div className="card mt-5 mr-2" style={{width: 18 + 'rem'}}>  
                <img className="card-img-top" src={img} alt={camName}  />
            
                <div className="card text-right">
    
                    <span className="text-muted">{roverName}</span>
                    <span className="text-muted">{date}</span>
                    <span className="text-muted">{id}</span>
                    <span className="text-muted" > {likes} likes</span>
                 
                </div>

            </div>
        </>
)
}

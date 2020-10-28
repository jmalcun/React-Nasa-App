export const randomFoto = (fotos) => {
    const i = Math.floor(Math.random()*fotos.length);
    const fot = fotos[i]
    
    return fot   
}

export const arrayFotos = (array) => {

    let fotos=[]

    array.forEach( e => {

        const foto={
            id: e.id,
            sol: e.sol,
            camara: {
                id: e.camera.id,
                FullName: e.camera.full_name,
                name: e.camera.name
            },
            img: e.img_src,
            rover:{
                id: e.rover.id,
                name: e.rover.name,
                fecha: e.rover.landing_date
            }

        }
        fotos.push(foto)
    });

    return fotos
}

export const modoFoto = (array) => {

    const formatFotos=[]

    array.forEach( e => {

        const photo={
           
            img: e.img,
            roverName:e.rover.name,
            date: e.rover.fecha,
            id: e.id,
            likes:0,
            camFullName: e.camara.FullName,
            camName: e.camara.name

        }
        formatFotos.push(photo)

        
    });

    return formatFotos;
}

export const filterRobotFotos = async (roverName) => {

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${encodeURI(roverName)}/photos?sol=1000&api_key=aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM`
    const resp = await fetch(url)
    const {photos} = await resp.json()

    const fotos = photos.map( e => {
        return {
            id: e.id,
            sol: e.sol,
            camara: {
                id: e.camera.id,
                FullName: e.camera.full_name,
                name: e.camera.name
            },
            img: e.img_src,
            rover:{
                id: e.rover.id,
                name: e.rover.name,
                fecha: e.rover.landing_date
            }
        }
    })

    return fotos
}



export const filterCamaraOppo = async(camaraName) => {
   
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&camera=${camaraName}&api_key=aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM`
    const resp = await fetch(url)
    const {photos} = await resp.json()

    const fotos = photos.map( e => {
        return {
            id: e.id,
            sol: e.sol,
            camara: {
                id: e.camera.id,
                FullName: e.camera.full_name,
                name: e.camera.name
            },
            img: e.img_src,
            rover:{
                id: e.rover.id,
                name: e.rover.name,
                fecha: e.rover.landing_date
            }
        }
    })

    return fotos
    
}

export const filterCamaraCur = async(camaraName) => {
   
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camaraName}&api_key=aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM`
    const resp = await fetch(url)
    const {photos} = await resp.json()

    const fotos = photos.map( e => {
        return {
            id: e.id,
            sol: e.sol,
            camara: {
                id: e.camera.id,
                FullName: e.camera.full_name,
                name: e.camera.name
            },
            img: e.img_src,
            rover:{
                id: e.rover.id,
                name: e.rover.name,
                fecha: e.rover.landing_date
            }
        }
    })

    return fotos
    
}

export const filterNameCam = (camaraName) => {

    let camara = ''

    if(camaraName === 'pancam'){
        return camara = 'Panoramic Camera'
    }
    if(camaraName ==='navcam'){
        return camara = 'Navegation Camera'
    }
    if(camaraName === 'fhaz'){
        return camara = 'Front Hazard Avoidance Camera'
    }
    if(camaraName === 'rhaz'){
        return camara = 'Rear Hazard Avoidance Camera'
    }
    if(camaraName === 'mast'){
        return camara = 'Mast Camera'
    }           
}


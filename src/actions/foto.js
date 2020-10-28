import { arrayFotos } from "../helpers/array"
import { types } from "../types/types"

export const StartGetFotos = () => {
    return async(dispatch) => {
        try {
            const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM`
            const resp = await fetch(url)
            const data = await resp.json()
            
            const {photos} = data
            const fotos = arrayFotos(photos)
            
            dispatch(getFotos(fotos))
            
        } catch (error) {
            console.log(error)
        }
    }
}

const getFotos = (fotos) => ({
    type: types.getFotos,
    payload: fotos
})



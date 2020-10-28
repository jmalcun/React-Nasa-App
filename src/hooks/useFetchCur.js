import { useEffect, useState } from "react"
import { filterCamaraCur, filterNameCam, modoFoto } from "../helpers/array"

export const useFetchFotosCur = (camaraName) => {
    
    const [state, setState] = useState({
        dataCur:[],
        loaded2: true,
        camNameC:camaraName
    })

    useEffect(() => {
        filterCamaraCur(camaraName)
            .then( imgs => setState({
                dataCur: modoFoto(imgs),
                loaded2:false,
                camNameC: filterNameCam(camaraName)
            }))

            return () => {
                setState({
                    dataCur:[],
                    loaded2: true,
                    camNameC:camaraName
                })
            }
        
    }, [camaraName])

    return state
}


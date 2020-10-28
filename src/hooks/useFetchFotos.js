import { useEffect, useState } from "react"
import { filterCamaraOppo, filterNameCam, modoFoto } from "../helpers/array"



export const useFetchFotosOpo = (camaraName) => {

    const [state, setState] = useState({
        data:[],
        loaded: true,
        camName:camaraName
    })

    useEffect(() => {
        filterCamaraOppo(camaraName)
            .then( imgs => setState({
                data: modoFoto(imgs),
                loaded:false,
                camName: filterNameCam(camaraName)
            }))

            return () => {
                setState({
                    data:[],
                    loaded: true,
                    camName:camaraName
                })
            }
        
    }, [camaraName])

    return state
}

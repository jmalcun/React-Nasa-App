import { types } from "../types/types";


const initialState={
    photos:[],
    loading:true
}

export const fotoReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.getFotos:
                return{
                    ...state,
                    photos:[...action.payload],
                    loading:false
                } 

        default:
            return state;
    }
}
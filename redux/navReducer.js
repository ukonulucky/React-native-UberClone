import { createSlice } from "@reduxjs/toolkit"

const createNavSlice = createSlice({
    name: "navSliceReducer",
    initialState: {
        origin: null,
        destiination: null,
        travelTime: null
    },
    reducer: {
        setOrigin: (state, action) => {
           state.origin = action.payload
        },
        setDestination:(state, action)  => {
          state.destiination = action.payload
        },
        setTravelTime: (state, action) => {
          state.travelTime = action.payload
        }
     
    }
})


export const { setDestination, setOrigin, setTravelTime } = createNavSlice.actions

const navSliceReducer = createNavSlice.reducer

export default navSliceReducer
import { createSlice } from "@reduxjs/toolkit"

const createNavSlice = createSlice({
    name: "navSliceReducer",
    initialState: {
        origin: null,
        destination: null,
        travelTime: null
    },
    reducer: {
        setOrigin: (state, action) => {
           state.origin = action.payload
        },
        setDestination:(state, action)  => {
          state.destination = action.payload
        },
        setTravelTime: (state, action) => {
          state.travelTime = action.payload
        }
     
    }
})


export const { setDestination, setOrigin, setTravelTime } = createNavSlice.actions

export const navSliceReducer = createNavSlice.reducer


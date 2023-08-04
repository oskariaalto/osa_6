import { createSlice } from "@reduxjs/toolkit"

const initialState= ''

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filtering (state, action) {
            return state = action.payload
        }
    }
})

export const { filtering } = filterSlice.actions
export default filterSlice.reducer



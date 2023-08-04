import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notifSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        zero(state){
            return state = null
        },
        setNotif (state, action) {
            return state = action.payload
        },
    }
}
)

export const { zero, setNotif } = notifSlice.actions

let timeooutID = null

export const setNotification = (text, length) => {
    return dispatch => {
        if (notifSlice.state===null){
            dispatch(setNotif(text))
            timeooutID = setTimeout(() => {
                dispatch(zero())
            }, length*1000)
        } else{
            clearTimeout(timeooutID)
            dispatch(setNotif(text))
            timeooutID = setTimeout(() => {
                dispatch(zero())
            }, length*1000)
        }
    }
}

export default notifSlice.reducer
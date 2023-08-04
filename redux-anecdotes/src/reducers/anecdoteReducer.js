import { createSlice } from '@reduxjs/toolkit'
import { getAll, create, updateLike } from '../services/anecdote'


const anecdoteSlice = createSlice({
  name : 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote (state, action) {
      state.push(action.payload)
    },
    setAnecdotes (state, action) {
      return action.payload
    },
    updateAnecdote (state, action) {
      const id = action.payload.id
      return state.map( a => a.id!==id ? a : action.payload)
    },
  },
})

export const { updateAnecdote, appendAnecdote, setAnecdotes} = anecdoteSlice.actions

export const intializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const addAnecdote = (content) => {
  return async dispatch => {
    const newAnec = await create(content)
    dispatch(appendAnecdote(newAnec))
  }
}

export const like = (id, anecdote) => {
  return async dispatch => {
    const likedAnec = {
      ...anecdote,
      votes: anecdote.votes+1
    }
    const updatedAnec = await updateLike(id,likedAnec)
    dispatch(updateAnecdote(updatedAnec))
  }
}

export default anecdoteSlice.reducer
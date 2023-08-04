import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux' 
import { intializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(intializeAnecdotes())
  },[dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification/>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
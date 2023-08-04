import { useDispatch, useSelector } from "react-redux"
import { like } from "../reducers/anecdoteReducer"
import { setNotification} from "../reducers/notificationReducer"

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch()

    const handleClick = (event) =>{
        event.preventDefault()
        dispatch(like(anecdote.id,anecdote))
        dispatch(setNotification(`you liked ${anecdote.content}`, 5))
    } 

    return(
        <div>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={handleClick}>vote</button>
        </div>
      </div>
    )
}

const AnecdoteList = (props) =>{
    const anecdotes = useSelector(({ anecdotes, filter }) => {
        const anec =  [...anecdotes]
        return filter === ''
            ? anec
            : anec.filter(a => a.content.search(filter)!==-1 )
    })
    return(
        <div>
            {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote => 
                <Anecdote key={anecdote.id} anecdote={ anecdote }/>
            )}
        </div>
    )
}

export default AnecdoteList
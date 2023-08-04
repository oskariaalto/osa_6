import { connect } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = (props) =>{
    const addAnecdot = async (event) => {
      event.preventDefault()
      const anecdote = event.target.anecdote.value
      event.target.anecdote.value = ''
      props.addAnecdote(anecdote)
      props.setNotification(`you added ${anecdote}`, 5)
    }
    
    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdot}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}


export default connect(null, { addAnecdote, setNotification })(AnecdoteForm)
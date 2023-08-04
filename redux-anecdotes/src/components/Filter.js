import { connect } from "react-redux"
import { filtering } from "../reducers/filterReducer"

const Filter = (props) => {
    const handleChange = (event) => {
        props.filtering(event.target.value)
    }

    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={(handleChange)} />
      </div>
    )
  }

  const mapStateToProps= (state) => {
    return {
        filter: state.filter
    }
  }
  const mapDispatchToProps = {
    filtering,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Filter)
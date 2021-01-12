import React, {useState} from "react"
import PropTypes from "prop-types"
import Error from "./Error"


const Form = ({setSearch, setPage}) => {

    const [term, setTerm] = useState("")
    const [error, setError] = useState(false)

    const browseImages = e => {
        e.preventDefault()

        // Validate
        if(term.trim() === "") {
            setError(true)
            return
        }
        setError(false)

        // Send term to main component
        setSearch(term)
        setPage(1)
    }

    return (  
        <form
            onSubmit={browseImages}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Browse for an image, example: football or coffee"
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Search"
                    />
                </div>
            </div>
            {error ? <Error message="Add a Search Term" /> : null}
        </form>
    )
}
 
Form.propTypes = {
    setSearch: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired
}

export default Form
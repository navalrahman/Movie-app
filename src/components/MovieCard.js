import React from 'react'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../actions/moviesAction'

const MovieCard = (props) => {
    const {id,name, rating} = props

    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeMovie(id))
    }

    return (
        <div>
            <h2>{name}</h2>
            <h3>{rating}</h3>

            <button onClick={() => {
                handleRemove(id)
            }}>remove</button>
        </div>
    )
}
export default MovieCard
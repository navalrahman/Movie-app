import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addMovie } from '../actions/moviesAction'

const MovieForm = (props) => {
    const [name, setName] = useState('')
    const [rating,setRating] = useState('')
    const [formError, setFromError] = useState({})

    const errors = {}

    const dispatch = useDispatch()

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setName(e.target.value)
        } else if(e.target.name === 'rating'){
            setRating(e.target.value)
        }
    }

    const runValidation = () => {

        if(name.trim().length === 0){
            errors.name = ''
        }if (rating.trim().length === 0) {
            errors.rating = 'This field cannot be left blank'
        } else if (isNaN(Number(rating))) {
            errors.rating = 'Enter a valid rating'
        } else if (Number(rating) > 10) {
            errors.rating = 'Maximum rating is 10'
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        runValidation()

        if(Object.keys(errors).length === 0){
            setFromError({})

            const movieData = {
                id: Number(new Date()),
                name:name,
                rating:Number(rating)
            }
            dispatch(addMovie(movieData))
            console.log(movieData)
            setName('')
            setRating('')
        }else {
            setFromError(errors)
        }
    }

    return (
        <div>
            <h2>ADD Movie</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter movie name" name="name" value={name} onChange={handleChange}/>
                { formError.name && <span>{formError.name}</span>}
                <br/><br/>
                <input type="text" placeholder="IMDB rating" name="rating" value={rating} onChange={handleChange}/>
                { formError.rating && <span>{formError.rating}</span>}
                <br/><br />
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default MovieForm
import React from 'react'
import { useSelector } from 'react-redux'

const MovieStatus = (props) => {

    const movies = useSelector((state) => {
        return state.movies
    })

    let topRated 
    if(movies.length === 0){
        topRated = 'N/A'
    } else {
        topRated = movies.find((movie) => {
            const maxRating = Math.max(...movies.map((ele) => {
                return ele.rating
            }))
            return movie.rating === maxRating
        })
    }

    return (
        <div>
            <h2>Movie Stats </h2>
            <h4>Total Movies - {movies.length}</h4>
            {
                movies.length > 0 ? ( <div>
                    <h4> Highest Rated Movie :<br /> # {`${topRated.name}`} -{`${topRated.rating}`} </h4></div>
                ) : (
                    <h4> Highest Rated Movie : {topRated} </h4>
                )
            }
        </div>
    )
}

export default MovieStatus
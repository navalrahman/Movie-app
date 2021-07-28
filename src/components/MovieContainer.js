import React from 'react'
import MovieForm from './MovieForm'
import MovieList from './MovieList'
import MovieStatus from './MovieStatus'

const MovieContainer = (props) => {
    return (
        <div>
            MovieContainer

            <MovieList />
            <MovieForm />
            <MovieStatus />
        </div>
    )
}

export default MovieContainer
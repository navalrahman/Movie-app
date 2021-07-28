export const addMovie = (movieName) => {
    return {
        type: 'ADD_MOVIE',
        payload: movieName
    }
}

export const removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        payload:id
    }
}

export const sortMovie = (str) => {
    return {
        type: 'SORT_MOVIE',
        payload: str
    }
}
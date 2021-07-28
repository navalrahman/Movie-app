import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import MovieCard from './MovieCard'
import { sortMovie } from '../actions/moviesAction'

const MovieList = (props) => {
    const [term, setTerm] = useState('')
    const [sort, setSort] = useState('')

    let movies = useSelector((state) => {
        return state.movies
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    if (term.length > 0) {
        movies = movies.filter((movie) => {
            return movie.name.toLowerCase().includes(term.toLowerCase())
        })
    }
    // let sortStr = ''

    // const handleSort = (e) => {
    //     sortStr = e.target.value
    //     dispatch(sortMovie(sortStr))
    // }

    const handleSort = (e) => {
        setSort(e.target.value)
        dispatch(sortMovie(sort))
    }

    return (
        <div>
            <input type="text" placeholder="Search by name..." value={term} onChange={handleChange} />

            <select className='select' value={sort} onChange={handleSort}>
                <option value='order by' hidden> Order By </option>
                <option value="Ascending (Name)"> Ascending (Name) </option>
                <option value="Descending (Name)"> Descending (Name) </option>
                <option value='Ratings (High - Low)'> Ratings (High - Low) </option>
                <option value='Ratings (Low - High)'> Ratings (Low - High) </option>
            </select>

            {
                movies.map((ele) => {
                    return <MovieCard {...ele}/>
                })
            }
        </div>
    )
}

export default MovieList
import _ from 'lodash'
const movieInitialState = []

const moviesReducer = (state = movieInitialState, action) => {
    switch(action.type){

        case 'ADD_MOVIE' : {
            return [...state,{...action.payload}]
        }

        case 'REMOVE_MOVIE' : {
            return state.filter((ele) => {
                return ele.id !== action.payload
            })
        }

        case 'SORT_MOVIE' : {
            if ([...state].length > 0) {
                if (action.payload === 'Ascending (Name)') {
                    return _.sortBy([...state])
                } else if (action.payload === 'Descending (Name)') {
                    return _.sortBy([...state]).reverse()
                } else if (action.payload === 'Ratings (High - Low)') {
                    return _.sortBy([...state]).reverse()
                } else if(action.payload === 'Ratings (Low - High)') {
                    return _.sortBy([...state])
                } else {
                    return [...state]
                }
            } else {
                return [...state]
            }
        }
        default : {
            return [...state]
        }
    }
}
export default moviesReducer
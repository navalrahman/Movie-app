import { createStore, combineReducers } from "redux";
import moviesReducer from "../reducers/moviesReducers";

const configureStore = () => {
    const store = createStore(combineReducers({
        movies: moviesReducer
    }))
    return store
}

export default configureStore
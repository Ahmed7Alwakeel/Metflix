import { combineReducers } from "redux";
import favReducer from './reducers/favourits';
import loaderReducer from './reducers/loader';
import moviesReducer from './reducers/movies';

export default combineReducers({
    favMovies:favReducer,
    loader:loaderReducer,
    movies:moviesReducer
})
import { combineReducers } from "redux";

import favoritesReducer from "./favoriteMoviesReducer";
import movieReducer from "./movieReducer";

export default combineReducers({
  favorites: favoritesReducer,
  movie: movieReducer,
});

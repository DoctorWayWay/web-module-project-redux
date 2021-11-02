import {
  ADD_FAVORITE,
  TOGGLE_FAVORITES,
  REMOVE_FAVORITES,
} from "../actions/movieActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => action.payload !== movie.id
        ),
      };
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default favoritesReducer;

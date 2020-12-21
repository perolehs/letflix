import { createReducer, on } from '@ngrx/store';
import { IMovie } from 'src/app/core/interfaces/themoviedb.interface';
import { addFavorites, dropFavorites } from '../../core/redux/favorites.actions';

const getLocalFavorites = () => {
    let favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : []
}

const setLocalFavorites = (movies: IMovie[]) => {
    localStorage.setItem('favorites', JSON.stringify(movies))
    return movies;
}

export const initialState: IMovie[] = getLocalFavorites();


const _favoritesReducer = createReducer(
    initialState,
    on(addFavorites, (state, { movie }) => setLocalFavorites(state.some(movie_ => movie_.id === movie.id) ? state : [...state, movie])),
    on(dropFavorites, (state, { id }) => setLocalFavorites(state.filter(movie => movie.id !== id)))
);

export function favoritesReducer(state: any, action: any) {
    
    return _favoritesReducer(state, action);
}
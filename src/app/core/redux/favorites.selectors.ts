import { createSelector } from '@ngrx/store';
import { IMovie } from '../interfaces/themoviedb.interface';

export const allMovies = (state: IMovie[]) => state;

export const getMovieById = createSelector(
    allMovies,
    (movies: IMovie[], props: { id: number }) => !movies.filter((movie) => movie.id === props.id)[0]
);
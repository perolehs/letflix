import { createAction, props } from '@ngrx/store';
import { IMovie } from 'src/app/core/interfaces/themoviedb.interface';

export const addFavorites = createAction(
    '[Favorites Component] AddFavorites',
    props<{ movie: IMovie }>()
);

export const dropFavorites = createAction(
    '[Favorites Component] DropFavorites',
    props<{ id: number }>()
);
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { IMovie } from '../interfaces/themoviedb.interface';

const setLocalFavorites = (movies: IMovie[]) => {
    localStorage.setItem('favorites', JSON.stringify(movies))
}

@Injectable()
export class FavoritesEffects {

    // loadMovies$ = createEffect();


    constructor(
        private actions: Actions
    ) { }
}
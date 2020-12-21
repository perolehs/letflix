import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/core/interfaces/themoviedb.interface';
import { dropFavorites } from "src/app/core/redux/favorites.actions";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public favoritesMovies$: Observable<IMovie[]>;

  constructor(
    private store: Store<{ favorites: IMovie[] }>
  ) {
    this.favoritesMovies$ = this.store.select('favorites');
  }

  ngOnInit(): void {
  }

  /**
   * Borra la pelicula de favoritos
   * @param {number} movieId id de la pelicula a borrar
   */
  public dropFavorite(movieId: number): void {
    this.store.dispatch(dropFavorites({ id: movieId }));
  }

  /**
   * Formatea el año
   * @param {string} fullDate  dato formateado dd-mm-yyyy
   * @returns {string} año en yyyy
   */
  public getYear(fullDate: string): string {
    return fullDate.split('-')[0] || fullDate;
  }
}

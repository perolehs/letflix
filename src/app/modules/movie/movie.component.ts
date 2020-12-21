import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemoviedbApiService } from 'src/app/core/services/themoviedb-api.service';
import { addFavorites, dropFavorites } from "src/app/core/redux/favorites.actions";
import { IMovie } from 'src/app/core/interfaces/themoviedb.interface';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public movie!: IMovie;
  public isFavorite$!: Observable<boolean>;

  constructor(
    private themoviedb: ThemoviedbApiService,
    private route: ActivatedRoute,
    private store: Store<{ favorites: IMovie[] }>,
    private location: Location
  ) {

    let id = this.route.snapshot.paramMap.get('id');
    if (!!id && typeof +id === 'number') {
      this.themoviedb.getDetailsMovie(+id).then(movie => this.movie = movie);

      this.isFavorite$ = this.store.select('favorites')
        .pipe(
          map(movies => {console.log(movies);return movies.some(movie => !!id && movie.id === +id)})
        );
    };

  }

  ngOnInit(): void {
  }

   /**
   * Formatea la url de la imagen para la calidad deseada
   * @param {string} url direcion relativa de la imagen
   * @param {boolean} horizontal si se quiere la imagen horizontal -> true
   * @returns {string} url formateado
   */
  public portalImg(url: string | null, horizontal: boolean): string {
    if (!url) return "";
    let w = horizontal ? "original" : 'w500'
    return `${environment.themoviedb.url_img_base}/${w}/${url}`;
  }
  
   /**
   * Interación con NGRX. Agregar a favoritos.
   */
  public addFavorite(): void {
    this.store.dispatch(addFavorites({ movie: this.movie }));
  }

  /**
   * Interación con NGRX.Eliminar de favoritos.
   */
  public dropFavorite(): void {
    this.store.dispatch(dropFavorites({ id: this.movie.id }));
  }

  /**
   * Para el boton de regresar
   */
  public back(): void {
    this.location.back();
  }
}

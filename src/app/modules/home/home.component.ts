import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from "rxjs/operators";
import { IMovie, ISerie, IMovieList } from 'src/app/core/interfaces/themoviedb.interface';
import { ThemoviedbApiService } from 'src/app/core/services/themoviedb-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movieList$: Observable<IMovie[]>;
  public serieList$: Observable<ISerie[]>;
  public moviesTopRatesList$: Observable<IMovie[]>;

  constructor(
    private themoviedb: ThemoviedbApiService
  ) {
    this.movieList$ = this.themoviedb.getAllTrendingMovies().pipe(this.limit(10));
    this.serieList$ = this.themoviedb.getAllPopularSeries().pipe(this.limit(10));
    this.moviesTopRatesList$ = this.themoviedb.getAllTopRatesMovies().pipe(this.limit(4));
  }

  ngOnInit(): void { }

  /**
   * Pipe para limitir cantidad de peliculas mostradas
   * @param {number} max maximo de peliculas
   * @returns {operador} pipe
   */
  private limit(max: number): OperatorFunction<any, any> {
    return map<any, any>(r => r.results.slice(0, max));
  }

  /**
   * Selecciona la pelicula con mejor vote average
   * @param {IMovie} movies array de peliculas
   * @returns {IMovie} Mejor pelicula
   */
  public bestAverageRate(movies: IMovie[]): IMovie {
    return movies.reduce((result, actual) => actual.vote_average > result.vote_average ? actual : result);
  }

  /**
   * Formatea la url de la imagen http://.../
   * @param {string} url direcion relativa de la imagen
   * @returns {string} url formateado
   */
  public portalImg(url: string | null): string {
    if (!url) return "";
    return `${environment.themoviedb.url_img_base}/original/${url}`;
  }
}

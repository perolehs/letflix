import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders, HttpUrlEncodingCodec } from '@angular/common/http';
import { IMovie, IMovieList, ISerieList } from "../interfaces/themoviedb.interface";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbApiService {

  private APIURL = `${environment.themoviedb.url_base}/${environment.themoviedb.version}`;
  // NO es para producción, esto debería ir en backend.
  private APIKEY = `api_key=${environment.themoviedb.api_key}`;

  constructor(
    private http: HttpClient,
    private urlEncode: HttpUrlEncodingCodec
  ) { }


  /**
   * @returns Observable<IMovieList>: Array de peliculas en tendencia
   */
  public getAllTrendingMovies() {
    return this.http.get<IMovieList>(`${this.APIURL}/trending/movie/day?${this.APIKEY}`, httpOptions);
  }

  /**
   * @returns Observable<IMovieList>: Array de peliculas mas votadas
   */
  public getAllTopRatesMovies() {
    return this.http.get<IMovieList>(`${this.APIURL}/movie/top_rated?${this.APIKEY}`, httpOptions);
  }

  /**
   * @param {string} query : para buscar pelicula
   * @returns Observable<IMovieList>: Array de peliculas encontradas
   */
  public searchMovie(query: string) {
    query = this.urlEncode.encodeValue(query);
    return this.http.get<IMovieList>(`${this.APIURL}/search/movie?${this.APIKEY}&query=${query}`, httpOptions);
  }

  /**
   * @param {number} movieId : id de la pelicula
   * @returns Promise<IMovie>: Detalles de la pelicula
   */
  public getDetailsMovie(movieId: number) {
    return this.http.get<IMovie>(`${this.APIURL}/movie/${movieId}?${this.APIKEY}`, httpOptions).toPromise();
  }

  /**
   * @returns Observable<ISerieList>: Array de Series
   */
  public getAllPopularSeries() {
    return this.http.get<ISerieList>(`${this.APIURL}/tv/popular?${this.APIKEY}`, httpOptions);
  }


}

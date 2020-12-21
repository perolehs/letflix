import { Component, Input, OnInit } from '@angular/core';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input('movieData') movieData!: any;
  @Input('horizontal') horizontal: boolean = true;

  public videoData!: { name: string, poster_path: string | null, backdrop_path: string | null, id: number };
  public imgBaseUrl = `${environment.themoviedb.url_img_base}/w200`;
  public isSerie: boolean = false;

  constructor() { }

  ngOnInit(): void {


    if (!!this.movieData) {
      this.isSerie = !!this.movieData.title;

      this.videoData = {
        name: this.movieData.title ? this.movieData.title : this.movieData.name,
        poster_path: this.movieData.poster_path,
        backdrop_path: this.movieData.backdrop_path,
        id: this.movieData.id
      };

    }

  }

  /**
   * Formatea la url de la imagen http://.../
   * @param {string} imgUrl direcion relativa de la imagen
   * @returns {string} url formateado
   */
  public getImg(imgUrl: string | null): string {
    return !imgUrl ? '' : `${this.imgBaseUrl}${imgUrl}`;
  }

}

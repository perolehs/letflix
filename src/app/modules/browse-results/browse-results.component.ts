import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ThemoviedbApiService } from 'src/app/core/services/themoviedb-api.service';

@Component({
  selector: 'app-browse-results',
  templateUrl: './browse-results.component.html',
  styleUrls: ['./browse-results.component.scss']
})
export class BrowseResultsComponent implements OnInit, OnDestroy {

  public moviesResult$!: Observable<any>;
  public loading: boolean = true;
  private routeSub: Subscription;

  constructor(
    private themoviedb: ThemoviedbApiService,
    private route: ActivatedRoute
  ) {
    
    this.routeSub = this.route.params.subscribe(params => {
      let query = params.query;
      if (!!query) this.moviesResult$ = this.themoviedb.searchMovie(query).pipe(
        map(movies => movies.results),
        tap(_ => this.loading = false)
      );
    });

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}

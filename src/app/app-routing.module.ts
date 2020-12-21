import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'home',  pathMatch: 'full' },
  { path: 'home', loadChildren: ()=>import('./modules/home/home.module').then(mod=>mod.HomeModule)},
  { path: 'movie', loadChildren: ()=>import('./modules/movie/movie.module').then(mod=>mod.MovieModule)},
  { path: 'search', loadChildren: ()=>import('./modules/browse-results/browse-results.module').then(mod=>mod.BrowseResultsModule)},
  { path: 'favorites', loadChildren: ()=>import('./modules/favorites/favorites.module').then(mod=>mod.FavoritesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

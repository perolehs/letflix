import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseResultsComponent } from './browse-results.component';

const routes: Routes = [
  { path: ':query', component: BrowseResultsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseResultsRoutingModule { }

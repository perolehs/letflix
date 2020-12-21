import { NgModule } from '@angular/core';
import { BrowseResultsRoutingModule } from './browse-results-routing.module';
import { BrowseResultsComponent } from './browse-results.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [BrowseResultsComponent],
  imports: [
    SharedModule,
    BrowseResultsRoutingModule,
    FlexLayoutModule
  ]
})
export class BrowseResultsModule { }

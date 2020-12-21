import { NgModule } from '@angular/core';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    SharedModule,
    FavoritesRoutingModule,
    FlexLayoutModule
  ]
})
export class FavoritesModule { }

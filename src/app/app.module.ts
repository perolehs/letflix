import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpUrlEncodingCodec } from '@angular/common/http';
import { favoritesReducer } from "./core/redux/favorites.reducer";
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreModule.forRoot({ favorites: favoritesReducer }, {})
  ],
  providers: [HttpUrlEncodingCodec],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from './video-card/video-card.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [VideoCardComponent, NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    VideoCardComponent,
    NavComponent,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

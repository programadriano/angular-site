import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InternalComponent } from './internal/internal.component';
import { NewsComponent } from './news/news.component';
import { VideoComponent } from './video/video.component';
import { VimeModule } from '@vime/angular';


@NgModule({
  declarations: [
    HomeComponent,
    InternalComponent,
    NewsComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    VimeModule
  ]
})
export class HomeModule { }

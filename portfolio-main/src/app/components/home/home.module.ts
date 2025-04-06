import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { MoreProyectsComponent } from './more-proyects/more-proyects.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AnimationComponent } from './animation/animation.component';
import { HumanAnimationComponent } from './human-animation/human-animation.component';

@NgModule({
  declarations: [
    HomeComponent,
    HumanAnimationComponent,
    AnimationComponent,
    BannerComponent,
    AboutComponent,
    JobsComponent,
    ProyectsComponent,
    MoreProyectsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    HttpClientModule,
    CarouselModule
  ]
})
export class HomeModule { }

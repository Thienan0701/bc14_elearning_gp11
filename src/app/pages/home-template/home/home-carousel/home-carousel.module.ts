import { HomeCarouselComponent } from './home-carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [HomeCarouselComponent],
  exports: [HomeCarouselComponent],
  imports: [
    CommonModule,
    NgbCarouselModule
  ]
})
export class HomeCarouselModule { }

import { ChangeDetectorRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VcardComponent } from '../components/vcard/vcard.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CardsComponent } from '../pages/cards/cards.component';
import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LazyLoadRoutingModule } from './lazy-load-routing.module';

@NgModule({
  declarations: [CarouselComponent, VcardComponent, CardsComponent],
  imports: [
    CommonModule,
    NgbCarouselModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    LazyLoadRoutingModule,
  ],
  providers: [NgbCarouselConfig],
})
export class LazyLoadModule {}

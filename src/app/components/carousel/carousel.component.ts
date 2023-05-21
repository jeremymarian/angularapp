import { Component, Input } from '@angular/core';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() cards!: Card[];
}

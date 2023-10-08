import { Component, Input } from '@angular/core';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
@Component({
  selector: 'app-vcard',
  templateUrl: './vcard.component.html',
  styleUrls: ['./vcard.component.css'],
})
export class VcardComponent {
  @Input() card!: Card;
}

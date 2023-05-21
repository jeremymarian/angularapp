import { Component, OnInit } from '@angular/core';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import * as PokemonTCG from 'pokemon-tcg-sdk-typescript/dist/sdk';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    PokemonTCG.findCardsByQueries({
      page: Math.floor(Math.random() * 10) + 1,
      pageSize: 120,
    }).then(res => {
      this.loaded = true;
      this.cards = res;
      this.carcards = this.cards;
      this.filteredItems = this.cards;
      console.log(this.loaded);
    });
  }
  value = 'Seach in Database';
  cards!: Card[];
  carcards!: Card[];
  loaded: Boolean = false;

  filteredItems!: Card[];

  searchQuery!: string;

  filterCards(e: any) {
    this.searchQuery = e.target.value;

    this.cards = this.filteredItems?.filter(({ name }: Card) =>
      name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
  }
}

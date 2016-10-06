import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { Cat } from './cat';
import { CatService } from './cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CatService],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  title = 'Cats';

  cats: Cat[];
  selectedCat: Cat;

  constructor(private catService: CatService) { }

  getCats(): void {
    //this.cats = this.catService.getCats();
    this.catService.getCats().then(cats => this.cats = cats);
  }

  ngOnInit(): void {
    this.getCats();
  }

  onSelect(cat: Cat): void {
    this.selectedCat = cat;
  }

}

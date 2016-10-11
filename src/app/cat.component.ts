import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cat } from './cat';
import { CatService } from './cat.service';

@Component({
  moduleId: module.name,
  selector: 'my-cats',
  templateUrl: './cat.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CatComponent implements OnInit {

  cats: Cat[];
  selectedCat: Cat;

  constructor(
    private catService: CatService,
    private router: Router
  ) { }

  getCats(): void {
    this.catService.getCats().then(cats => this.cats = cats);
  }

  ngOnInit(): void {
    this.getCats();
  }

  onSelect(cat: Cat): void {
    this.selectedCat = cat;
  }

  gotoDetail(): void {
    let link = ['/detail', this.selectedCat.name];
    this.router.navigate(link);
  }
}

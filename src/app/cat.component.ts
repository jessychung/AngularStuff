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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.catService.create(name)
      .then(cat => {
        this.cats.push(cat);
        this.selectedCat = null;
      });
  }

  delete(cat: Cat): void {
    this.catService
      .delete(cat.id)
      .then(() => {
        this.cats = this.cats.filter(h => h !== cat);
        if (this.selectedCat === cat) { this.selectedCat = null; }
      });
  }

}

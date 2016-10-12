import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cat } from './cat';
import { CatService } from './cat.service';

@Component({
  selector: 'my-cats',
  templateUrl: './cat.component.html',
  encapsulation: ViewEncapsulation.None
})

export class CatComponent implements OnInit {

  title = "Add a cat";

  cats: Cat[];
  selectedCat: Cat;

  constructor(
    private catService: CatService,
    private router: Router
  ) { }

  getCats(): void {
    this.catService.getCats().then(cats => this.cats = cats); // inputting data into Cat[](type)
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

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.cats); }

  add(name: string, breed: string, pp: any): void {
    console.log(pp);
    name = name.trim();
    breed = breed.trim();
    if (!name || !breed) { return; }
    this.catService.create(name, breed)
      .then(dog => {
        console.log(dog);
        this.cats.push(dog);
        this.selectedCat = null;
      });
  }

  // filter function (y)
  // {
  //   return y !== cat;
  // }

  delete(cat: Cat): void {
    this.catService
      .delete(cat.id)
      .then(() => {
        this.cats = this.cats.filter(y => y !== cat); //get rid of selected one in this.cats, keep all the other cats
        if (this.selectedCat === cat) { this.selectedCat = null; } //hide details if deleted
      });
  }



}

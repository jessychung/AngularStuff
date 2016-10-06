import {Component, OnInit} from '@angular/core';

import { Cat } from './cat';
import { CatService } from './cat.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  cats: Cat[] = [];

  constructor(private catService: CatService) { }

  getCats(): void {
    this.catService.getCats().then(cats => this.cats = cats.slice(1,2));
  }

  ngOnInit(): void {
    this.getCats();
  }

}

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Cat } from './cat';
import { CatService } from './cat.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  cats: Cat[] = [];

  constructor(
    private catService: CatService,
    private router: Router
  ) { }

  getCats(): void {
    this.catService.getCats().then(cats => this.cats = cats.slice(1,2));
  }

  ngOnInit(): void {
    this.getCats();
  }

  gotoDetail(cat: Cat): void {
    let link = ['/detail', cat.name];
    this.router.navigate(link);
  }


}

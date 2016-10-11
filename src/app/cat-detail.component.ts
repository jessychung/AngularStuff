import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {CatService} from './cat.service';

import { Cat } from './cat';

@Component({
  selector: 'cat-detail',
  templateUrl: 'cat-detail.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CatDetailComponent implements OnInit {
  @Input() cat: Cat;

  constructor(
    private catService: CatService,
    private test: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.test.params.forEach((params: Params) => {
      let name = params['name'];
      this.catService.getACat(name)
        .then(cat => this.cat = cat);
    });
  }

  save(): void {
    this.catService.update(this.cat)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

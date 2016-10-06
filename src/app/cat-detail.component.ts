import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Cat } from './cat';



@Component({
  selector: 'cat-detail',
  templateUrl: `
  <div *ngIf="cat">
  <h3>{{cat.name}} is a {{cat.breed}}</h3>
  </div>
  `,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CatDetailComponent {
  @Input()
  cat: Cat;
}

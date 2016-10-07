import {Injectable} from '@angular/core';

import { Cat } from './cat';
import { CATS } from './list-of-cats';


@Injectable()
export class CatService {
  getCats(): Promise<Cat[]>  {
    return Promise.resolve(CATS);
  }

  getACat(name: string): Promise<Cat> {
    return this.getCats()
      .then(cats => cats.find(cat => cat.name === name));
  }

  //fake slow connection

  getCatssSlowly(): Promise<Cat> {
    return new Promise<Cat[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getCats());
  }
}

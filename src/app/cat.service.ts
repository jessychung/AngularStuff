import {Injectable} from '@angular/core';

import { Cat } from './cat';
import { CATS } from './list-of-cats';


@Injectable()
export class CatService {
  getCats(): Cat[] {
    return CATS;
  }
}

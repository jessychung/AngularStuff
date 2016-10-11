import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Cat } from './cat';


@Injectable()
export class CatService {

  private catsUrl = 'app/cats';

  constructor(private http: Http) { }

  getCats(): Promise<Cat[]>  {
    return this.http.get(this.catsUrl)
      .toPromise()
      .then(response => response.json().data as Cat[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
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

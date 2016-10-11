import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Cat } from './cat';


@Injectable()
export class CatService {

  private catsUrl = 'app/cats';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) { }

  getCats(): Promise<Cat[]>  {
    return this.http.get(this.catsUrl)
      .toPromise()
      .then(response => response.json().data as Cat[])
      .catch(this.handleError);
  }

  getACat(name: string): Promise<Cat> {
    return this.getCats()
      .then(cats => cats.find(cat => cat.name === name));
  }

  update(cat: Cat): Promise<Cat> {
    const url = `${this.catsUrl}/${cat.id}`;
    console.log(url);
    return this.http
      .put(url, JSON.stringify(cat), {headers: this.headers})
      .toPromise()
      .then(() => cat)
      .catch(this.handleError);
  }


  //prepping input for http

  create(name: string): Promise<Cat> {
    console.log(this.catsUrl);
    return this.http
      .post(this.catsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.catsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then()
      .catch(this.handleError);
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  //fake slow connection

  getCatssSlowly(): Promise<Cat> {
    return new Promise<Cat[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getCats());
  }
}

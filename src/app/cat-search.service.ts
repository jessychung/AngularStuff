import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


import { Cat } from './cat';

@Injectable()
export class CatSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Cat[]> {
    return this.http
      .get(`app/cats/?name=${term}`)
      .map((r: Response) => r.json().data as Cat[]);
  }
}

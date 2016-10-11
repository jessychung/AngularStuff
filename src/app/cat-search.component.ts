import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { CatSearchService } from './cat-search.service';

import { Cat } from './cat';


@Component({
  selector: 'cat-search',
  templateUrl: 'cat-search.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CatSearchService]
})

export class CatSearchComponent implements OnInit {

  cats: Observable<Cat[]>;

  private searchTerms = new Subject<string>();

  constructor(
    private catSearchService: CatSearchService,
    private router: Router) {}


  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.cats = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.catSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Cat[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Cat[]>([]);
      });
  }


  gotoDetail(cat: Cat): void {
    let link = ['/detail', cat.name];
    this.router.navigate(link);
  }

}

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cats = [
      { id: 1, name: 'itsy', breed: 'tabby'},
      { id: 2, name: 'donut', breed: 'russian blue'},
      { id: 3, name: 'peanut', breed: 'calico'}
    ];
    return {cats};
  }
}

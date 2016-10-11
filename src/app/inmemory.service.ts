import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cats = [
      { id: 3, name: 'itsy', breed: 'tabby'},
      { id: 12, name: 'donut', breed: 'russian blue'},
      { id: 5, name: 'peanut', breed: 'calico'}
    ];
    return {cats};
  }
}

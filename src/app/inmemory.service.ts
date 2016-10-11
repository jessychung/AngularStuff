import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cats = [
      { name: 'itsy', breed: 'tabby'},
      { name: 'donut', breed: 'russian blue'},
      { name: 'peanut', breed: 'calico'}
    ];
    return {cats};
  }
}

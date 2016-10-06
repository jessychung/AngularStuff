import { DthgtdhPage } from './app.po';

describe('dthgtdh App', function() {
  let page: DthgtdhPage;

  beforeEach(() => {
    page = new DthgtdhPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { MapFrontPage } from './app.po';

describe('map-front App', function() {
  let page: MapFrontPage;

  beforeEach(() => {
    page = new MapFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { BragaFFLPage } from './app.po';

describe('braga-ffl App', function() {
  let page: BragaFFLPage;

  beforeEach(() => {
    page = new BragaFFLPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('braga-ffl works!');
  });
});

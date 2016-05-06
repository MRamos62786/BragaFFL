export class BragaFFLPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('braga-ffl-app h1')).getText();
  }
}

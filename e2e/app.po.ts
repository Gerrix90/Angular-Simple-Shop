import { browser, element, by } from 'protractor';

export class DreamBeanPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('db-root h1')).getText();
  }
}

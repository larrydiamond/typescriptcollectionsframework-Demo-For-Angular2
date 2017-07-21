import { B2A2Page } from './app.po';

describe('b2-a2 App', function() {
  let page: B2A2Page;

  beforeEach(() => {
    page = new B2A2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('TypeScript Collections Framework example Angular 2 application');
  });
});

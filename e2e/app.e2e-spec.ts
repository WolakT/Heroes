import { ArticlesPage } from './app.po';

describe('articles App', () => {
  let page: ArticlesPage;

  beforeEach(() => {
    page = new ArticlesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

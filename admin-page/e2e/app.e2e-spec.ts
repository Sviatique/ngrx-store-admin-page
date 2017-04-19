import { AdminPagePage } from './app.po';

describe('admin-page App', () => {
  let page: AdminPagePage;

  beforeEach(() => {
    page = new AdminPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

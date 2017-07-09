import { ClouddeveloperPage } from './app.po';

describe('clouddeveloper App', () => {
  let page: ClouddeveloperPage;

  beforeEach(() => {
    page = new ClouddeveloperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to clouddeveloper.io channel!!');
  });
});

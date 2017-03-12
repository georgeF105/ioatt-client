import { IoattClientPage } from './app.po';

describe('ioatt-client App', () => {
  let page: IoattClientPage;

  beforeEach(() => {
    page = new IoattClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

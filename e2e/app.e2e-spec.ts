import { Consumer.AiPage } from './app.po';

describe('consumer.ai App', () => {
  let page: Consumer.AiPage;

  beforeEach(() => {
    page = new Consumer.AiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { LoyltyRewardzTaskPage } from './app.po';

describe('loylty-rewardz-task App', () => {
  let page: LoyltyRewardzTaskPage;

  beforeEach(() => {
    page = new LoyltyRewardzTaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

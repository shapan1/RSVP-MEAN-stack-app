import { RsvpMeanPage } from './app.po';

describe('rsvp-mean App', () => {
  let page: RsvpMeanPage;

  beforeEach(() => {
    page = new RsvpMeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

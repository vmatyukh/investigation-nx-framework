import { getGreeting } from '../support/app.po';

describe('tour-of-heroes', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to tour-of-heroes!');
  });
});

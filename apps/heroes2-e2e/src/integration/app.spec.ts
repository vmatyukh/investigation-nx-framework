import { getGreeting } from '../support/app.po';

describe('heroes2', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to heroes2!');
  });
});

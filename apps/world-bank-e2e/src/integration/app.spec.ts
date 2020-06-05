import { getToolbar, getTitleRegionList } from '../support/app.po';

describe('world-bank', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {

    // Function helper example, see `../support/app.po.ts` file
    getToolbar().contains('World Bank App');
  });

  it('should display title', () => {

    getTitleRegionList().contains('REGIONS List');
  })
});

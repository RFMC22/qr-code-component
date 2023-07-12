/// <reference types="cypress" />
import App from '../../src/App'

describe('<App />', () => {
  beforeEach(() => {
    cy.mount(<App />)
  })
  it('Card render', () => {
    cy.getBySel('card').should('be.visible')
  })
  it('Imagen render', () => {
    cy.getBySel('img').should('be.visible')
  })
  it('Footer render', () => {
    cy.getBySel('footer').should('be.visible')
  })
  it('Footer title render', () => {
    cy.getBySel('footer').get('h1').should('be.visible')
  })
  it('Footer text render', () => {
    cy.getBySel('footer').get('p').should('be.visible')
  })
  it('Title content', () => {
    cy.getBySel('footer').get('h1').should('have.text', 'Improve your front-end skills by building projects')
  });
  it('Text content', () => {
    cy.getBySel('footer').get('p').should('have.text', 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level')
  });
})
/// <reference types="cypress" />

describe('Login to nopcommerce',()=>
{
    it('Launch the broweser',()=>
    {

     cy.visit('https://www.nopcommerce.com/en')
     cy.clearCookies()
     cy.clearLocalStorage()
     cy.log('Cookies are cleared')
     cy.get('[title="nopCommerce"]')
     cy.title().should('be.equal', 'Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce')
     


    })
})
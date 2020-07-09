/// <reference types="cypress" />

describe("Login test scenarios", ()=>
{
it("Launch the browser",()=>
{
cy.visit('https://www.flipkart.in/')
cy.clearCookies()           
cy.log('browser launched successfully')
})
it("Validate the login page title and logo",()=>
{
    
cy.title().should("be.equal","Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")
})
it("Search an item", ()=>
{
   
 cy.get('[type=text]').type("Books")
 cy.get('[type=submit]').click()
})

it("login ",()=>
{

    cy.get('._3Ep39l').click()

})

it("Enter the credentials",()=>
{
    cy.get('_2zrpKA _1dBPDZ').type("ABC")
    cy.get('[type=password]').type("1234")
})
})
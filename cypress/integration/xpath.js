describe("Locate the elemeents using xpath",()=>
{
it("First use case",()=>
{
cy.visit('https://www.flipkart.com/')
cy.log('Webpage is launched successfully')

})

it("cart",()=>
{
  cy.xpath('//a[@class="_3ko_Ud"]').click()
  cy.wait(1000)
})

it("2nd use case",()=>
{
cy.xpath('//a[@class="_3Ep39l"]').click()
const mobile= cy.xpath('//input[@class="_2zrpKA _1dBPDZ"]')
mobile.type("abc")
const pwd= cy.xpath('//input[@type="password"]')
pwd.type("abc")
cy.xpath('//button[@class="_2AkmmA _1LctnI _7UHT_c"]').click()


})

})

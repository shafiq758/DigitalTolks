///<reference types="cypress-xpath" />
require('cypress-xpath')

export class VerifyLoginUrl
{
clickLogin()
{
   cy.wait(3000);
   cy.xpath('(//*[@href="/login"])[1]').click();

}
ValidatecurrentURL()
{

    cy.url().should('include','digitaltolk.se/login')
}

}
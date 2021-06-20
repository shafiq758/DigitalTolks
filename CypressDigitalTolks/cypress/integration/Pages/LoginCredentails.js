///<reference types="cypress-xpath" />
require('cypress-xpath')

export class Logincredentials
{
    clearusernamefield()
    {
        cy.xpath('//input[@placeholder="Username"]').focus().clear();
    }

    clearpasswordfield()
    {

        cy.xpath('//input[@placeholder="Password"]').focus().clear();
    }

    enterusername(Username)
    {
        cy.xpath('//input[@placeholder="Username"]').type(Username)
    }

    enterpassword(Password)
    {
        cy.xpath('//input[@placeholder="Password"]').type(Password)
    }

    clickLoginButton()
    {
        cy.get('.el-form-item__content > .el-button').click()

    }

    ValidateErrorforWrongCredentails()
    {
        cy.get('.el-notification__content > p').contains("The user credentials were incorrect.")
    }

    ValidateLoginSuccess()
    {
        cy.contains('Text Translations').should('be.visible')
        cy.contains(' Välkommen till Sveriges snabbaste tolkförmedling').should('be.visible')



    }

    removeerrormessage()
    {

        cy.get('.el-notification__closeBtn').click();
    }

}
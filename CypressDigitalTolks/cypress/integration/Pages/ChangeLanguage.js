///<reference types="cypress-xpath" />
require('cypress-xpath')

export class changeLanguage{

    clickLanguageDropdown()
    {
        cy.wait(9000)
        cy.xpath('(//*[contains(@class,"el-icon-arrow-up")])[1]').click();



    }

    selectEnglish()
    {

        cy.xpath('//li[contains(@class,"select-drop")]/..//*[normalize-space(text())="EN"]').click();
    }
    
    ValidateLanguageChange()
    {
        cy.contains('Services');
    }
    ValidateSelectedLanguageChanged()
    {

        cy.contains('EN');
    }
}
///<reference types="cypress-xpath" />

import { exists } from 'fs'

require('cypress-xpath')

export class ConfirmBooking
{
 VerifyConfirmationModalOpen()
 {

    cy.xpath('//*[@class="el-dialog__title" and text()="Confirmation"]').should('exist');
 }
 SelectValue(value)
 {
     cy.wait(1000);
    cy.xpath('//li[contains(@class,"dropdown__item")]/..//span[text()="'+value+'"]').click();
 }
 EnterBookerNName(value)
 {
    cy.xpath('//input[contains(@placeholder,"Booker Name")]').click();
     cy.xpath('//input[contains(@placeholder,"Booker Name")]').type(value);
     
 }

 EnterStaffName(value)
 {

    cy.xpath('//input[contains(@placeholder,"Staff Name")]').click();
    cy.xpath('//input[contains(@placeholder,"Staff Name")]').type(value);
 }
 EnterReference(value)
 {

    cy.xpath('//*[contains(text(),"Reference")]/..//input').click();
    cy.xpath('//*[contains(text(),"Reference")]/..//input').type(value);
 }

EnterBookingDetails(value)
{
    cy.xpath('(//textarea[contains(@class,"textarea__inner")])[5]').type(value);

} 
SelectFaxradiobutton(value)
{
    cy.xpath('//input[@type="radio" and @value="'+value+'"]').click({force: true});

}
ClearFaxField()

{
    cy.xpath('//input[@type="text" and contains(@placeholder,"Ange")]').focus().clear();
}

EnterFaxNumber(value)
{

     cy.xpath('//input[@type="text" and contains(@placeholder,"Ange")]').type(value);
}

ClickonChangeButton()
{
    cy.get('.booking-confirm-form__change-address-button').click();
}
clearAdreesTranslatorfield()
{
    cy.get('#google_address_autocomplete').focus().clear();
}
EnterAddressinTrannslator(value)
{
    cy.get('#google_address_autocomplete').type(value);
}

EnterAddressDetails(value)
{
    cy.xpath('//*[text()="Address detail"]/..//textarea').type(value);
}
Select_NO_forAllFormRadioButton()
{
    var i=0;
    for (i=1;i<7;i++)
    {
        cy.xpath('(//input[@type="radio" and @value="false"])['+i+']').click({force: true});
    }
}
ClickonCreateBooking()
{
    cy.get('.text-right > .app-button-primary').click();
}

}
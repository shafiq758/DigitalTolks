

export class LoginPage

{
 Navigate()
 {
   cy.visit("https://ct.digitaltolk.se/")

 }
 ValidatePageLaunch()
 {

    cy.contains('DigitalTolk')

 }


}
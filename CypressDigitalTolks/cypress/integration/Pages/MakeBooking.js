///<reference types="cypress-xpath" />
require('cypress-xpath')

export class MakeBooking
{

     Result1=0;
    clickonLanguage()
    {

        cy.xpath('(//input[@placeholder="Select Language"])[1]').click();

    }

    enterlanguagename(language)
    {

        cy.xpath('(//input[@placeholder="Select Language"])[1]').type(language+'{enter}');
    }

    clickonDay()
    {

        cy.xpath('(//input[@placeholder="Day"])[1]').click();
    }

    select14thdayfromCurrentdate()
    {
            cy.xpath('(//span[contains(@class, "today")])[1]').invoke('text').then((Result)=> {
            this.Result1= parseInt(Result)
            this.Result1=this.Result1+14;
            if (this.Result1>30){
            this.Result1= this.Result1-30;
            console.log(this.Result1);
            cy.xpath('(//span[contains(@class, "flatpickr") and text()='+this.Result1+'])[2]').click();
        }
        else
            cy.xpath('(//span[contains(@class, "flatpickr") and text()='+this.Result1+'])[1]').click();

        })


    }

    clickstarttime()
    {
     cy.xpath('(//input[@placeholder="Start Time"])[1]').click();

    }

    EnterSetStartTime7hoursfromCurrenttime()
    {
        var d = new Date()
     var gmtHours = d.getUTCHours();
     gmtHours= gmtHours+9;
     if (gmtHours>23)
     {
         
         this.clickonDay();
         cy.xpath('(//span[contains(@class, "selected")])[1]').invoke('text').then((Result)=> {
            this.Result1= parseInt(Result)
            this.Result1=this.Result1+1;
           
            cy.xpath('(//span[contains(@class, "flatpickr") and text()='+this.Result1+'])[1]').click();
         })

         gmtHours=gmtHours-23;
     }
     this.clickstarttime();

    document.write("The local time zone is: GMT " + gmtHours);
    cy.xpath('(//input[@placeholder="Start Time"])[1]').type(gmtHours+':00'+'{enter}')
    }

    Selectcheckbox(value)
    {

        cy.xpath('(//input[@type="radio" and @value="'+value+'"])[1]').click({force: true});
    }

    clickonOtheroption()
    {

        cy.xpath('(//span[text()="Others"]/../..//*[contains(@class,"el-icon")])[1]').click();
    }
    Selectoption(value)
    {

        cy.xpath('(//input[@type="checkbox" and @value="'+value+'"])[1]').click({force: true});
    }
    clickotherdropdown()
    {
        cy.xpath('(//span[text()=" 6 Optionals selected "]/../..//*[contains(@class,"el-icon")])[1]').click();
    }
    clickandSelectTrannslator(value)
    {

        cy.xpath('(//input[@type="text" and  contains(@class,"select__input")])[1]').click().type(value);
       
    }
    SelectTranslator(value)
    {

        cy.xpath('(//span[contains(text(),"'+value+'")])[1]').click();
    }

    clickonBooking()
    {
        cy.xpath('(//button[@type="button"]/..//span[text()=" Book "])[1]/..').click();
    }

    clicksomewhere()
    {

        cy.xpath('(//*[contains(@class,"normal-booking-form__other-options-header")])[1]').click();
    }
    Uploadfile()
    {
        cy.wait(4000);
        const filepath='CV.pdf';
        
        cy.xpath('(//input[@type="file" and contains(@class,"el-upload")])[1]').attachFile(filepath);


    }



}
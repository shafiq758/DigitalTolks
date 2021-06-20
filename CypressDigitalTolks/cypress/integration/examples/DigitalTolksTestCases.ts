///<reference types="cypress-xpath" />
//require('cypress-xpath')



import {LoginPage} from  "../Pages/LaunchPage"
import {changeLanguage} from  "../Pages/ChangeLanguage.js"

import {VerifyLoginUrl} from  "../Pages/VerifyLoginUrl.js"
import {Logincredentials} from  "../Pages/LoginCredentails.js"

import {variables} from "../Variables/Variables.js"
import {MakeBooking} from "../Pages/MakeBooking.js"
import {ConfirmBooking} from "../Pages/ConfirmBooking.js"

const loginvariables = new variables()

const Login  = new LoginPage() 

const Langchange= new changeLanguage();
const verifyURL= new VerifyLoginUrl();
const logincredentials = new Logincredentials();
const makebooking = new MakeBooking();
const confirmbooking= new ConfirmBooking();


it ('Application Navigation',function(){

Login.Navigate();   // Launch the Application
Login.ValidatePageLaunch();  // Validate Page launched successfully

} )

it ('Select English Language', function(){

    Langchange.clickLanguageDropdown(); // This function click on dropdpwn for langauge selection
    Langchange.selectEnglish();         // This function selects English Language 
    Langchange.ValidateSelectedLanguageChanged(); //This funnction validates of the text displayed in selected language
    Langchange.ValidateLanguageChange();  // This funnction check language change in the displayed drop down of language
})

it ('Click on Login and Verify URL',function(){

    verifyURL.clickLogin();    // This function click on login button
    verifyURL.ValidatecurrentURL();  // This function validates on clicking login URL got changed




})
it ('Enter Invalid Login Credentials', function(){

    logincredentials.enterusername(loginvariables.invalidusername);  //This function enter invalid username
    logincredentials.enterpassword(loginvariables.invalidpass);      //This function enter invalid password
    logincredentials.clickLoginButton();                             // This funnction clicks on Login button
    logincredentials.ValidateErrorforWrongCredentails();             // This function validates errors occur for incorrect username and password
    logincredentials.removeerrormessage();                           // This function removes error message

})

it ('Enter valid Login Credentials', function(){

    logincredentials.clearusernamefield();     //This function clears invalid username from text field
    logincredentials.clearpasswordfield();      //This function clears invalid password from text field
    logincredentials.enterusername(loginvariables.validusername);  ////This function enter valid username
    logincredentials.enterpassword(loginvariables.validpas);      ////This function enter valid password
    logincredentials.clickLoginButton();                         //// This funnction clicks on Login button
    logincredentials.ValidateLoginSuccess();                     // This function validates user has login successfully

})

it ('Make Booking', function(){


    makebooking.clickonLanguage();//This Function click on Lannguage for Booking
    makebooking.enterlanguagename(loginvariables.language);//This Function Enter Language Ludhianiska 
    makebooking.clickonDay()  // This function click on Day Selection field
    makebooking.select14thdayfromCurrentdate(); // This function selects a day 14th day away from current day 
    
  
    makebooking. EnterSetStartTime7hoursfromCurrenttime(); // This funnction selects start strt time seven hours from current swedish time this function also 
                                                           //ensures if 7th is in next day then day also gets changed day after the selected day 
                                
    makebooking.Selectcheckbox(loginvariables.check2);          //This function selects the type of booking i.e physical
    
    makebooking.clickonOtheroption();                            // This function click on others
    makebooking.clickotherdropdown();                            // This function click on other dropdown
    makebooking.Selectoption(loginvariables.check4);            // this function select female translator checkbox
    makebooking.clickandSelectTrannslator(loginvariables.Translator); // this function enters the translator name 
    makebooking.SelectTranslator(loginvariables.Translator);         // this function selects the translators from serached option
   
    makebooking.clicksomewhere()
    //makebooking.Uploadfile();     Session is getting Logged out because of this function
    makebooking.clickonBooking();     // This function clicks on Booking


})

it ('Confirm Booking', function(){
    confirmbooking.VerifyConfirmationModalOpen();  // This function verifies modal got opened 
    confirmbooking.EnterBookerNName(loginvariables.BookerName);  // This function enters booker name
    confirmbooking.SelectValue(loginvariables.BookerName);  // this function selects the booker name

    confirmbooking.EnterStaffName(loginvariables.StaffName); // This function enters the staff name
    confirmbooking.SelectValue(loginvariables.StaffName);     // This function selects the entered staff name

    confirmbooking.EnterReference(loginvariables.Reference);  //This function enters Reference 
    confirmbooking.SelectValue(loginvariables.Reference);     // This function selects that reference from dropdown
    confirmbooking.EnterBookingDetails(loginvariables.Textarea); //This function enters booking details
    confirmbooking.SelectFaxradiobutton(loginvariables.RadiooptionforNotification); // This function selects fax radio button option
    confirmbooking.ClearFaxField() //This function clear fax input field
    confirmbooking.EnterFaxNumber(loginvariables.Fax); //This function enters fax in fax field 
    confirmbooking.ClickonChangeButton();  // This function clicks on Change button
    confirmbooking.clearAdreesTranslatorfield() //This function clears default address from address translator fees
    confirmbooking.EnterAddressinTrannslator(loginvariables.AdressforTrannslator);//this function enters address in translator field 
    confirmbooking.EnterAddressDetails(loginvariables.AddressDetails); //this function enters address details 
    confirmbooking.Select_NO_forAllFormRadioButton(); // This function selects no for all radio buttons in confirmation booking page 
    confirmbooking.ClickonCreateBooking(); //This function clicks on create booking.
   


})
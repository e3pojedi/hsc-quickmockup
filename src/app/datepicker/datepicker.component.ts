import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})

export class DatepickerComponent implements OnInit {
  // 1. Create a formGroup- called registerForm
  // this encapsulates all our fornControls in our form
  registerForm: FormGroup;

display_dob:any;
display_dob2:any;


//-----  Inject the FormBuilder and the DataService dependencies ------// 
  constructor(
    private fb: FormBuilder,
    private ds: DataService
  ) { }


  ngOnInit() {
    // 3. We configure our registerForm with FormBuilder
    // The Function 'inaliliseForm()' returned FormGroup of Controls and assigns the FormGroup
    //  to variable 'registerForm'
    // NOTE: 'inaliliseForm()' IS AT THE BOTOM OF THIS PAGE
    this.registerForm = this.inaliliseForm();
  } // end ngOnInit



  onSubmit() {
    // Get all the current 'Form Values' as an Object and 
    // assigns it to a variable object called 'form' 
    const form = this.registerForm.value

    // Get form value and display
    this.display_dob = form.dob;
    this.display_dob2 = form.dob2;
    // --------SUBMITTING THE VALID FORM VALUES -----------------------//
   
      //Add data to the data service  METHOD called 'addPerson'     
      this.ds.addPerson(this.registerForm.value);

      alert("submitted :)")
      //resets form
      this.registerForm.reset();

}// end onSubmit


//  Create RegisterForm Controls and returns a FormGroup
inaliliseForm(): FormGroup {
  return this.fb.group({
    "dob": [null],
    "dob2": [null],
  })
} // end inaliliseForm()



}// end Class
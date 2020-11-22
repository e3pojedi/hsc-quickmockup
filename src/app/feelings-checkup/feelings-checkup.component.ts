import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";
import { DataService } from "../services/data.service";
import { MatSliderModule } from "@angular/material/slider";

@Component({
  selector: "app-feelings-checkup",
  templateUrl: "./feelings-checkup.component.html",
  styleUrls: ["./feelings-checkup.component.css"]
})
export class FeelingsCheckupComponent implements OnInit {
  registerForm: FormGroup;
  formValues: any;

isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

 


  //-----  Inject the FormBuilder and the DataService dependencies ------//
  constructor(private fb: FormBuilder, private ds: DataService, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    // 3. We configure our registerForm with FormBuilder
    // The Function 'inaliliseForm()' returned FormGroup of Controls and assigns the FormGroup
    //  to variable 'registerForm'
    // NOTE: 'inaliliseForm()' IS AT THE BOTOM OF THIS PAGE
    this.registerForm = this.inaliliseForm();
     this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onSubmit() {
    // Get all the current 'Form Values' as an Object and
    // assigns it to a variable object called 'form'
    this.formValues = this.registerForm.value;
    alert("submitted :)");
    //this.registerForm.reset();
  }

  //  Create RegisterForm Controls and returns a FormGroup
  inaliliseForm(): FormGroup {
    return this.fb.group({
      sliderValue: [null]
    });
  }
}

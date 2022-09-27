import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from 'src/app/service/Business/password/passwordValidator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  formGroup! : FormGroup
  inputType : string = 'password'
  showPasswordText : boolean = false
  passwordIcon : string = 'fa-eye-slash'
  CinputType : string = 'password'
  CshowPasswordText : boolean = false
  CpasswordIcon : string = 'fa-eye-slash'
  moreThanSixCharacters = false;
  containsUpperCase = false;
  containsLowerCase = false;
  containsNumber = false;
  containsSpecialCharacter = false;
  firstPassword!: string;
  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formGroup = this.fb.group({
      password : ['', [Validators.required]],
      confirmPassword : ['', [Validators.required]]
    }, {validator : PasswordValidator})
  }

  showUserpassord(val: string) {
    if(val === 'p') {
      this.showPasswordText =! this.showPasswordText
      if(this.showPasswordText) {
        this.inputType = 'text'
        this.passwordIcon = 'fa-eye'
      }else {
        this.inputType = 'password'
        this.passwordIcon = 'fa-eye-slash'
      }
    }else if(val === 'c') {
      this.CshowPasswordText =! this.CshowPasswordText
      if(this.CshowPasswordText) {
        this.CinputType = 'text'
        this.CpasswordIcon = 'fa-eye'
      }else {
        this.CinputType = 'password'
        this.CpasswordIcon = 'fa-eye-slash'
      }
    }

  }


  monitorPasswordPattern(value: any) {
    console.log(value)
    this.firstPassword = value;
    this.moreThanSixCharacters = false;
    this.containsUpperCase = false;
    this.containsLowerCase = false;
    this.containsNumber = false;
    this.containsSpecialCharacter = false;
    if (/(?=.*[A-Z])/.test(value)) {
      this.containsUpperCase = true;
  }
   if (/(?=.*[a-z])/.test(value)){
    this.containsLowerCase = true;
  }
   if(/(?=.*[0-9])/.test(value)) {
    this.containsNumber = true;
  }
   if (/(?=.*[$@$!%*?&])/.test(value)) {
    this.containsSpecialCharacter = true;
  }
   if(value.length >= 6) {
    this.moreThanSixCharacters = true;
  }else {
    // this.moreThanSixCharacters = true;
  }
    
  }

}

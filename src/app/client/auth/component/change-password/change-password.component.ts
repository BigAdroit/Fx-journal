import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formGroup = new FormGroup({
      password : new FormControl('', [Validators.required]),
      confrimPassword : new FormControl('', [Validators.required])
    })
  }

  showUserpassord() {
    this.showPasswordText =! this.showPasswordText
    if(this.showPasswordText) {
      this.inputType = 'text'
      this.passwordIcon = 'fa-eye'
    }else {
      this.inputType = 'password'
      this.passwordIcon = 'fa-eye-slash'
    }
  }
}

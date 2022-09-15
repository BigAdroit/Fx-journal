import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/service/shared/notification.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthService } from 'src/app/service/data/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RegistrationComponent>,
    private dialog : MatDialog,
    private notification : NotificationService,
    private route : Router,
    private authService : AuthService
    ) { }
    regForm! : FormGroup
  ngOnInit(): void {
    this.createForm()
  }

  closeRegModal(){
    this.dialogRef.close()
  }

  Register(data: any) {
    this.authService.regFunction(data).subscribe((res: any)=> {
      if(res.hasErrors) {
        this.notification.notify({content: res.description, type: 'danger'})
      }else {
        this.notification.notify({content: res.description, type:'success'})
        // this.route.navigate(['/client-dashboard'])
        this.closeRegModal()
        this.dialog.open(LoginComponent, {
          minWidth : ''
        })
      }
    })
    // this.notification.notify({content:"Registration Successfull", type:'success'})
    console.log(data)
  }
  createForm() {
    this.regForm = new FormGroup({
      firstname : new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname : new FormControl('', [Validators.required, Validators.minLength(3)]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required]),

    })
  }
}

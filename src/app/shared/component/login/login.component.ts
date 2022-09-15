import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/service/shared/notification.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/service/data/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private dialogRef : MatDialogRef<LoginComponent>,
    private notification : NotificationService,
    private route : Router,
    private authService : AuthService
    ) { }
    loginForm!: FormGroup
  ngOnInit(): void {
    this.createForm()
  }

  closeLoginModal(){
    this.dialogRef.close()
  }

  loginToPortal(data : any) {
    console.log(data)
    this.authService.loginFunction(data).subscribe((res: any)=> {
      if(res.hasErrors) {
        this.notification.notify({content: res.description, type: 'danger'})
      }else {
        this.notification.notify({content: res.description, type:'success'})
        this.closeLoginModal()
        this.dialogRef.close()
        this.route.navigate(['/client-dashboard'])
      }
      
    })
  }

  createForm() {
    this.loginForm = new FormGroup({
      email : new FormControl('',[ Validators.email, Validators.required]),
      password : new FormControl('',[ Validators.required])

    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/data/auth.service';
import { NotificationService } from 'src/app/service/shared/notification.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  passForm! : FormGroup
  constructor(
    private authService : AuthService,
    private notification : NotificationService
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  forgotPass(data: any) {
    this.authService.forgotPassword(data).subscribe((res: any)=> {
        console.log(res)
      if(res.hasErrors === true) {
        this.notification.notify({content: res.description, type: 'danger'}) 
      }else {
        this.notification.notify({content: res.description, type: 'success'}) 
      }
    })
  }

  createForm() {
    this.passForm = new FormGroup({
      email : new FormControl('', [Validators.email, Validators.required])
    })
  }
}

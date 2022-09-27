import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/data/auth.service';
import { NotificationService } from 'src/app/service/shared/notification.service';

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: ['./reset-code.component.scss']
})
export class ResetCodeComponent implements OnInit {
  resetForm! : FormGroup
  constructor(
    private authService : AuthService,
    private notification : NotificationService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.resetForm = new FormGroup({
      code : new FormControl('', [Validators.required])
    })
  }

  sendCode(data:any) {
    data.email = localStorage.getItem("fx-email-set")
    console.log(data)
    this.authService.resetCode(data).subscribe((res)=> {
      if(res.hasErrors) {
        this.notification.notify({content: res.description, type: 'danger'})
      }else {
        this.router.navigate(["/auth/change-password"])
        this.notification.notify({content: res.description, type:'success'})
        // this.closeLoginModal()
      }
    })
  }
}

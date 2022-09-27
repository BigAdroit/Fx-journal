import { Component, OnInit } from '@angular/core';
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
  password = "password"
  icon = "fa-eye-slash"
  openEye :boolean = false
  constructor(
    private notification : NotificationService,
    private route : Router,
    private authService : AuthService
  ) { }
    loginForm! : FormGroup
  ngOnInit(): void {
    this.createForm()
  }

  loginToPortal(data : any) {
    console.log(data)
    this.authService.loginFunction(data).subscribe((res: any)=> {
      console.log(res.token)
      if(res.hasErrors) {
        this.notification.notify({content: res.description, title: "An Error Occur", type: 'error'})
      }else {
        console.log(res)
        localStorage.setItem("access_token", JSON.stringify(res.payload))
        this.notification.notify({content: res.description, title: "Login Success", type:'success'})
        this.route.navigate(['/client-dashboard'])
        // this.closeLoginModal()
      }
      
    })
  }

  createForm() {
    this.loginForm = new FormGroup({
      email : new FormControl('',[ Validators.email, Validators.required]),
      password : new FormControl('',[ Validators.required])

    })
  }

  toggleIconShow() {
    this.openEye = !this.openEye
    if(!this.openEye) {
      this.icon = "fa-eye"
      this.password = "text"
    } else {
      this.password = "password"
      this.icon = "fa-eye-slash"
    }
  }
}

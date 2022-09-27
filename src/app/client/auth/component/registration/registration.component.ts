import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/shared/notification.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/data/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  regForm! : FormGroup
  icon = "fa-eye-slash"
  password = "password"
  openEye : boolean = false
  constructor(
    private notification : NotificationService,
    private route : Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  Register(data: any) {
    this.authService.regFunction(data).subscribe((res: any)=> {
      if(res.hasErrors) {
        this.notification.notify({content: res.description, type: 'danger'})
      }else {
        this.notification.notify({content: res.description, type:'success'})
        // this.route.navigate(['/client-dashboard'])        
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

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {
  toggleHamburger : boolean = false
  constructor( public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openReg() {
    this.dialog.open(RegistrationComponent, {
      minWidth: '300px',
      height: '100vh',
    })
  }

  openLogin() {
    this.dialog.open(LoginComponent, {
      minWidth: '300px'
    })
  }
}

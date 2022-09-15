import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/shared/notification.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-admin-head-banner',
  templateUrl: './admin-head-banner.component.html',
  styleUrls: ['./admin-head-banner.component.scss']
})
export class AdminHeadBannerComponent implements OnInit {
  @Output() toggleClick = new EventEmitter()
  @Input() iconToggle : Boolean = true
   constructor(
    private notification : NotificationService,
    private router : Router,
    private dialog : MatDialog
   ) { }

  ngOnInit(): void {
  }

  actionBtn() {
    this.toggleClick.emit()
  }

  logOut() {
    localStorage.removeItem('access_token')
    this.router.navigate(['/auth'])
    // this.dialog.open(LoginComponent, {
    //   minWidth : '300px'
    // })
    this.notification.notify({content: "Logout Successful", type:'success'})
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DashboardService } from 'src/app/service/data/dashboard.service';
import { EditAddressComponent } from 'src/app/shared/ui/edit-address/edit-address.component';
import { EditDobComponent } from 'src/app/shared/ui/edit-dob/edit-dob.component';
import { EditNameComponent } from 'src/app/shared/ui/edit-name/edit-name.component';
import { EditPhoneComponent } from 'src/app/shared/ui/edit-phone/edit-phone.component';
import { UploadComponent } from 'src/app/shared/ui/upload/upload.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData : any
  constructor(
    private dialog : MatDialog,
    private dashboardService : DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboardService.dashboardDisplayName().subscribe((res)=> {
      this.userData = res.payload.others
    })
  }

  openModal(firstname: string, lastname:string) {
    this.dialog.open(EditNameComponent, {
      minWidth : "300px",
      data: {
        firstname,
        lastname
      }
    })
  }

  openDOBModal(dob: string) {
    this.dialog.open(EditDobComponent, {
      minWidth : "300px",
      data: {
        dateOfBirth : dob,
        
      }
    })
  }

  openPhoneModal(val: string) {
    this.dialog.open(EditPhoneComponent, {
      minWidth : "300px",
      data: {
        phone : val,
        
      }
    })
  }

  openAddressModal(val: string) {
    this.dialog.open(EditAddressComponent, {
      minWidth : "300px",
      data: {
        address : val,
        
      }
    })
  }

  openUploadModal() {
    this.dialog.open(UploadComponent, {
      minWidth : "300px",
     
    })
  }

}

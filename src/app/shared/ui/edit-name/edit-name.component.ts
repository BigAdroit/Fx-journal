import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { FormGroup, Validator, FormControl, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/service/shared/notification.service';
import { ProfileService } from 'src/app/service/data/profile/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.scss']
})
export class EditNameComponent implements OnInit {
  formGroup!: FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog : MatDialog,
    private notificationService : NotificationService,
    private profileService : ProfileService,
    private router : Router

  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.createForm()
    this.formGroup.patchValue({
      firstname : this.data.firstname,
      lastname : this.data.lastname
    })

  }

  confrimationModal() {
    this.dialog.open(ConfirmationComponent, {
      minWidth : "300px",
      data : {
        message : "Are you sure you want to change your name!"
      }
    })

    .afterClosed().subscribe((res)=> {
      if(res) {
        this.profileService.updateName(this.formGroup.value).subscribe((result)=> {
          if(result.hasErrors) {
            this.notificationService.notify({content: result.description, type: 'danger'})
          }else {
            this.router.navigate(["/client-dashboard/profile"])
            this.notificationService.notify({content: result.description, type:'success'})
          }
        })
      }
    })
  }

  createForm() {
    this.formGroup = new FormGroup({
      firstname : new FormControl("", [Validators.required]),
      lastname : new FormControl("", Validators.required)
    })
  }
}

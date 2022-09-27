import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/service/data/profile/profile.service';
import { NotificationService } from 'src/app/service/shared/notification.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  previewImage! : File
  formGroup! : FormGroup
  upload : boolean = true
  file! : File
  constructor(
    private profileService : ProfileService,
    private notificationService : NotificationService,
    private router : Router,
    private dialogRef : MatDialogRef<UploadComponent>
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  SelectUploadFile(event: any) {
    if(event.target.files?.length > 0 ) {
      const reader = new FileReader()
      this.file = event.target.files[0]
      reader.onload = (_event : any)=> {
        this.previewImage = _event.target.result
        this.upload = false
      }
      reader.readAsDataURL(event.target.files[0])
    }
    
  }

  createForm() {
    this.formGroup = new FormGroup({
      profileImage : new FormControl("", Validators.required)
    })
  }

  onFileSubmit() {
    const formValue = new FormData()
    console.log(formValue)
    formValue.append("profileImage", this.file)
    this.profileService.uploadFile(formValue).subscribe((res)=> {
      if(res.hasErrors) {
        this.notificationService.notify({content: res.description, type: 'danger'})
      }else {
        this.dialogRef.close()
        this.router.navigate(["/client-dashboard/profile"])
        this.notificationService.notify({content: res.description, type:'success'})
      }
    })
  }
}

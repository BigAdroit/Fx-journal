import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditNameComponent } from 'src/app/shared/ui/edit-name/edit-name.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private dialog : MatDialog,

  ) { }

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open(EditNameComponent, {
      minWidth : "300px"
    })
  }

}

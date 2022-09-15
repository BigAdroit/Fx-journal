import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.scss']
})
export class EditNameComponent implements OnInit {
  // dropdownList : any;
  // selectedItems  : any = [];
  // dropdownSettings :IDropdownSettings = {};
  constructor(
    private dialog : MatDialog,
  ) { }

  ngOnInit(): void {

  }

  confrimationModal() {
    this.dialog.open(ConfirmationComponent, {
      minWidth : "300px"
    })
  }

}

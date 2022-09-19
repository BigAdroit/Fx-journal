import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DashboardService } from 'src/app/service/data/dashboard.service';
import { EditNameComponent } from 'src/app/shared/ui/edit-name/edit-name.component';

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

  openModal() {
    this.dialog.open(EditNameComponent, {
      minWidth : "300px"
    })
  }

}

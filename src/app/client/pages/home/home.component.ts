import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from 'src/app/shared/component/registration/registration.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayImage = 'assets/images/safe-preview1.png'
  constructor(
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    AOS.init({
      duration:3000
    })
  }

  onMouseOver(val:number) {
    if(val === 2) {
      this.displayImage = 'assets/images/safe-preview2.png'
    }else if(val ===3) {
      this.displayImage = 'assets/images/trade-three.png'
    }else {
      this.displayImage = 'assets/images/safe-preview1.png'
    }
  }

  openReg() {
    this.dialog.open(RegistrationComponent)
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {
  showMenu : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showMenu = ! this.showMenu
    console.log(this.showMenu)
  }

  closeOpenMenu() {
    this.showMenu = false
  }  
}

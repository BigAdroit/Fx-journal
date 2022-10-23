import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-claculators',
  templateUrl: './claculators.component.html',
  styleUrls: ['./claculators.component.scss']
})
export class ClaculatorsComponent implements OnInit {
  dropdownList : any = [] ;
  selectedItems : any = [];
  dropdownSettings  : IDropdownSettings = {};
  isEur : boolean = false
  isUsd : boolean = false
  currency : string = ""
  isSellDirection : boolean = false
  isBuyDirection : boolean = false
  direction : string = ""
  constructor() { }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  isBuy() {
    this.isBuyDirection =! this.isBuyDirection
    if(this.isBuyDirection === true) {
      this.isSellDirection = false
      this.direction = "buy"
    }
    console.log(this.direction)
  }

  isSell() {
    this.isSellDirection =! this.isSellDirection
    if(this.isSellDirection === true) {
      this.direction = "sell"
      this.isBuyDirection = false
    }
    console.log(this.direction)
  }

  onEurSelect() {
    this.isEur =! this.isEur
    if(this.isEur === true ) {
      this.currency = "EUR"
      this.isUsd = false
    }
  }

  onUsdSelect() {
    this.isUsd =! this.isUsd
    if(this.isUsd === true ) {
      this.currency = "USD"
      this.isEur = false
    }
  }
  
}

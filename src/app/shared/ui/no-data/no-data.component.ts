import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements OnInit {
  @Input() displayText! : string
  @Input() btnText! : string
  @Output() btnEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  btnOperation() {
    this.btnEvent.emit()
  }
}

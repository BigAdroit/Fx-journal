import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss']
})
export class BaseButtonComponent implements OnInit {
  @Input() text! : string 
  @Input() class! : string
  @Input() disabled : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}

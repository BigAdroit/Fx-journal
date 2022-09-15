import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forex-basics',
  templateUrl: './forex-basics.component.html',
  styleUrls: ['./forex-basics.component.scss']
})
export class ForexBasicsComponent implements OnInit {
  @Input() lessonNum : number = 0
  @Input() lessonDescription! : string 
  @Input() lessonObjectives : string [] = []
  constructor() { }

  ngOnInit(): void {
  }

}

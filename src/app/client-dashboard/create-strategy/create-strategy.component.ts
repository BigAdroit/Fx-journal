import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StrategyService } from 'src/app/service/data/strategy/strategy.service';
import { NotificationService } from 'src/app/service/shared/notification.service';

@Component({
  selector: 'app-create-strategy',
  templateUrl: './create-strategy.component.html',
  styleUrls: ['./create-strategy.component.scss']
})
export class CreateStrategyComponent implements OnInit {
  strategyForm! : FormGroup
  token = localStorage.getItem('access_token') || ''; 
   payload = atob(this.token.split('.')[1]);   
   parsedPayload = JSON.parse(this.payload);
   id = this.parsedPayload.info._id 
  constructor(
    private strategyService : StrategyService,
    private notification : NotificationService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.strategyForm = new FormGroup ({
      strategy_name : new FormControl("", [Validators.required]),
      description : new FormControl("", [Validators.required])

    })
  }
  createStrategy(data: any) {
    data.user_id = this.id
    this.strategyService.createStrategy(data).subscribe((res)=> {
      if(res.hasErrors) {
        this.notification.notify({content: res.description, type: 'danger'})
      }else {
        this.notification.notify({content: res.description, type:'success'})
        this.router.navigate(['/client-dashboard/strategy'])
      }
    })
  }
}

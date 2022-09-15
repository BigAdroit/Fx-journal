import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JournalService } from 'src/app/service/data/journal/journal.service';
import { NotificationService } from 'src/app/service/shared/notification.service';
import { JournalComponent } from '../journal/journal.component';

@Component({
  selector: 'app-create-journal',
  templateUrl: './create-journal.component.html',
  styleUrls: ['./create-journal.component.scss']
})
export class CreateJournalComponent implements OnInit {
  journalForm! : FormGroup
  token = localStorage.getItem('access_token') || ''; 
   payload = atob(this.token.split('.')[1]);   
   parsedPayload = JSON.parse(this.payload);
   id = this.parsedPayload.info._id 
  constructor(
    private journalService : JournalService,
    private notification : NotificationService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createJournal(data: any) {
    data.user_id = this.id
    console.log(data)
    this.journalService.createJournal(data).subscribe((res)=> {
      if(res.hasErrors) {
        this.notification.notify({content: res.description, type: 'danger'})
      }else {
        this.notification.notify({content: res.description, type:'success'})
        this.router.navigate(['/client-dashboard/journal'])
      }
    })
  }

  createForm() {
    this.journalForm = new FormGroup( {
      currency_pair : new FormControl("", [Validators.required, Validators.minLength(3)]),
      trade_date_time : new FormControl("", [Validators.required]),
      position_type : new FormControl("", Validators.required),
      lot_size : new FormControl("", Validators.required),
      profit_loss : new FormControl("", Validators.required),
      entry_price : new FormControl("", Validators.required),
      exit_price : new FormControl("", Validators.required),
      stop_loss : new FormControl("", Validators.required),
      take_profit : new FormControl("", Validators.required),
      risk_reward : new FormControl("", Validators.required),
      trade_setup : new FormControl("", Validators.required),
      comment : new FormControl("", Validators.required),
    })
  }
}

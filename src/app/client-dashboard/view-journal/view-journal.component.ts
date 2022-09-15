import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from 'src/app/service/data/journal/journal.service';

@Component({
  selector: 'app-view-journal',
  templateUrl: './view-journal.component.html',
  styleUrls: ['./view-journal.component.scss']
})
export class ViewJournalComponent implements OnInit {
  token = localStorage.getItem('access_token') || ''; 
  payload = atob(this.token.split('.')[1]);   
  parsedPayload = JSON.parse(this.payload);
  user_id = this.parsedPayload.info._id 
  journalData : any
  constructor(
    private activatedRoute : ActivatedRoute,
    private journalService : JournalService
  ) { }

  ngOnInit(): void {
    const journal_id = this.activatedRoute.snapshot.paramMap.get("id")
    this.journalService.getUserSingleJournal(this.user_id, journal_id).subscribe((res)=> {
      console.log(res.payload)
      this.journalData = res.payload[0]
    })
  }

}

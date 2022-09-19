import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { JournalService } from 'src/app/service/data/journal/journal.service';
import { StrategyService } from 'src/app/service/data/strategy/strategy.service';
import * as XLSX from "xlsx"

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  token = localStorage.getItem('access_token') || ''; 
  payload = atob(this.token.split('.')[1]);   
  parsedPayload = JSON.parse(this.payload);
  user_id = this.parsedPayload.info._id 
  journalList : any
  constructor(
    private journalService  : JournalService,
    private strategyService : StrategyService
  ) { }

  ngOnInit(): void {
    this.journalService.getUserJournal().subscribe((res)=> {
      this.journalList = res.payload        
    })
  }
  
  exportSpreadSheet() {
    this.journalService.getUserJournal().subscribe((res)=> {
      this.journalList = res.payload
      const ws : XLSX.WorkSheet = XLSX.utils.json_to_sheet(res.payload)
      const wb : XLSX.WorkBook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, "sheet1")
      XLSX.writeFile(wb, "journalSheet.xlsx")
    })
    // const element = document.getElementById("table")
  }
}

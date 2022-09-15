import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar : MatSnackBar, private http:HttpClient) { }

  config : MatSnackBarConfig = {
    duration : 5000,
    horizontalPosition : 'right',
    verticalPosition : 'top'
  }
   subject = new BehaviorSubject({content:"", type:""})
  notify(data:any) {
    this.subject.subscribe((res)=> {
      this.config['panelClass'] = [res.type]
      this.snackBar.open(res.content, '', this.config)
    })

    this.subject.next(data)
  }
}

import { Injectable } from '@angular/core';
import { NzNotificationPlacement, NzNotificationService } from 'ng-zorro-antd/notification';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  position :  NzNotificationPlacement = "bottomRight"
  constructor(
    private notification : NzNotificationService
    ) { }
  notify(res: any) {
    
      this.notification.create(
        res.type,
        res.title,
        res.content,
        { nzPlacement: this.position }
      );
  }
}

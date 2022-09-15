import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of,  throwError } from 'rxjs';
import { retry, catchError, tap, finalize, delay } from "rxjs/operators";

import { LoaderService } from '../class/loader.service';
import { NotificationService } from '../shared/notification.service';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  authToken$ = of();
  authToken! : string;
  errorMessage : string = ""
  constructor(
    private loaderService : LoaderService,
    private notification: NotificationService,
    private router : Router
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show()

    if(request.url.search('/api/connect/token') == -1) {
      this.authToken = JSON.parse(localStorage.getItem("access_token")!);

      request = request.clone({
          setHeaders: {
              Authorization: `Bearer ${this.authToken}`
          }
      })

      // return next.handle(request)
  }
    return next.handle(request).pipe(tap(evt => {
      if(evt instanceof HttpResponse ) {
          this.loaderService.hide()
      }

    })
    

  //   catchError((error: HttpErrorResponse) => {
  //     this.loaderService.hide();
  //     if (error.status === 401) {
  //         this.notification.notify({content :'Your Session has expired. Please Login',  type:'danger'})
  //         this.router.navigateByUrl('/');
  //     }

  //     if (error.error instanceof ErrorEvent) {
  //         //client-side error
  //         this.errorMessage = `Error: ${error.error.message}`;
  //     } else {
  //         // server-side error

  //         switch (error.status) {
  //             case 503: {
  //                 this.errorMessage = 'An Internal Error Occured. Our Engineers Have Been Contacted';
  //                 this.notification.notify({content :this.errorMessage,  type:'danger'})
  //                 break;
  //             }
  //             case 500: {
  //                 this.errorMessage = 'An Internal Error Occured. Our Engineers Have Been Contacted';
  //                 this.notification.notify({content :this.errorMessage,  type:'danger'})
  //                 break;
  //             }
  //             case 400: {
  //                 this.errorMessage = 'An Error Occured While Processing Your Request. Please Try Again';
  //                 if (error.error.error == "invalid_grant" || "access_denied") {
  //                     this.notification.notify({content :error.error['errorDescription'],  type:'danger'})
  //                 } else {
  //                     this.notification.notify({content :this.errorMessage,  type:'danger'})
  //                 }
  //                 break;
  //             }
  //             case 404: {
  //                 this.errorMessage = 'An Error Occured While Processing Your Request. Please Try Again';
  //                 this.notification.notify({content :this.errorMessage,  type:'danger'})
  //                 break;
  //             }
  //             case 405: {
  //                 this.errorMessage = 'An Error Occured While Processing Your Request. Please Try Again';
  //                 this.notification.notify({content :this.errorMessage,  type:'danger'})
  //                 break;
  //             }
  //             case 0: {
  //                 this.errorMessage = 'A Connection Error Occured. Please Check Your Network Connection';
  //                 this.notification.notify({content :this.errorMessage,  type:'danger'}, )
  //                 break;
  //             }
  //         }
  //     }

  //     if (error.status === 503 || error.status === 0) {
  //         return throwError(this.errorMessage);
  //     }
  // })

    );
  }
}

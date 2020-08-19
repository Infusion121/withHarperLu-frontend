import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ItemPage } from '@app/model/itemPage.modal';
import { Subject } from 'rxjs';
import { Categories } from '@app/model/categories.modal';

@Injectable({
  providedIn: 'root',
})
export class Formservice {
  rooturl = 'https://server.shopify.infusion121.com';
  subscriptionComplete = new Subject<String>();

  constructor(private http: HttpClient, private router: Router) {}

  newWebsiteSubscription(emailAddress: string) {
    const headers = new HttpHeaders();
    const email = {
      email: emailAddress,
    };
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.rooturl + '/mailchimp/subscribe', email, { headers: headers })
      .subscribe((response: any) => {
        this.subscriptionComplete.next('completed');
      });
  }
}

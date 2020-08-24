import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { Formservice } from '@app/services/form.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-web-subscription-form',
  templateUrl: './web-subscription-form.component.html',
  styleUrls: ['./web-subscription-form.component.scss'],
})
export class WebSubscriptionFormComponent implements OnInit {
  webSubscriptionForm: FormGroup;
  phoneNumber = '^(+d{1,3}[- ]?)?d{10}$';
  submitted = false;

  //Recaptcha Information
  siteKey: string;

  constructor(private _fb: FormBuilder, private formSevice: Formservice) {
    this.siteKey = '6LebtcAZAAAAANICSAA2Qm0uxyRw_yKXi_xRkXWB';
  }

  ngOnInit(): void {
    this.webSubscriptionForm = this._fb.group({
      email_address: ['', [Validators.required, Validators.email]],
      recaptcha: '',
    });

    this.formSevice.subscriptionComplete.pipe(take(1)).subscribe((value) => {
      if (value == 'completed') {
        let formContainer = document.getElementById('webSubscriptionFormContainer') as HTMLElement;
        formContainer.style.display = 'none';
        let submissionCompleteContainer = document.getElementById('submission_complete_container') as HTMLElement;
        submissionCompleteContainer.style.display = 'block';
      }
    });
  }

  handleSuccess(event: any) {
    let formData = this.webSubscriptionForm.value;
    console.log(formData.email_address);
    this.formSevice.newWebsiteSubscription(formData.email_address);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.webSubscriptionForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.webSubscriptionForm.invalid) {
      console.log('Form is invalid');
      return;
    } else {
      let ele = document.getElementById('validateRecaptcha') as HTMLElement;
      ele.click();
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCaptchaModule } from 'ngx-captcha';
import { LoaderComponent } from './loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { WebSubscriptionFormComponent } from '@app/forms/web-subscription-form/web-subscription-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, NgxCaptchaModule, BlockUIModule.forRoot()],
  declarations: [LoaderComponent, WebSubscriptionFormComponent],
  exports: [LoaderComponent, WebSubscriptionFormComponent],
})
export class SharedModule {}

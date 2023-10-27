import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
  public startDate = new Date(2023, 9, 17);
  public minDate = new Date(2023, 9, 17);
  public maxDate = new Date(2023, 10, 30);

  constructor(private platform: Platform) {}

  get platformUi() {
    return this.platform.ANDROID || this.platform.IOS;
  }
}

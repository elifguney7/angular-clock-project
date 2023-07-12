import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  dayTime: string = '0';
  hourTime: string = '0';
  minuteTime: string = '0';
  secondTime: string = '0';
  pageCountdown: string = '00:00:00:00';

  ngOnInit() {}

  createCountdown() {
    const countDown = setInterval(() => {
      this.secondTime = (parseInt(this.secondTime) - 1).toString();
      this.secondTime = this.secondTime.padStart(2, '0');     
      this.minuteTime = this.minuteTime.padStart(2, '0');
      this.hourTime = this.hourTime.padStart(2, '0');
      this.dayTime = this.dayTime.padStart(2, '0');

      this.pageCountdown = `${this.dayTime}:${this.hourTime}:${this.minuteTime}:${this.secondTime}`;

      if (this.dayTime == '00' && this.hourTime == '00' && this.minuteTime == '00' && this.secondTime == '00') {
        // Perform actions when countdown reaches zero
        this.pageCountdown='00:00:00:00';
        clearInterval(countDown);
      }

      if (this.hourTime == '00' && this.minuteTime == '00' && this.secondTime == '00') {
        this.dayTime = (parseInt(this.dayTime) - 1).toString();
        this.hourTime = '24';
      }

      if (this.minuteTime == '00' && this.secondTime == '00') {
        this.hourTime = (parseInt(this.hourTime) - 1).toString();
        this.minuteTime = '60';
      }

      if (this.secondTime == '00') {
        this.minuteTime = (parseInt(this.minuteTime) - 1).toString();
        this.secondTime = '60';
      }
    }, 1000);
  }
}

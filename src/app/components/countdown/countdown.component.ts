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
  xdayTime: string = '0';
  xhourTime: string = '0';
  xminuteTime: string = '0';
  xsecondTime: string = '0';
  ngOnInit() {}

  
  createCountdown() {
      this.secondTime = this.xsecondTime.padStart(2, '0');     
      this.minuteTime = this.xminuteTime.padStart(2, '0');
      this.hourTime = this.xhourTime.padStart(2, '0');
      this.dayTime = this.xdayTime.padStart(2, '0');
      this.xsecondTime = this.xminuteTime = this.xhourTime = this.xdayTime = '0';

      const countDown = setInterval(() => {
      this.secondTime = (parseInt(this.secondTime) - 1).toString().padStart(2, '0');
      
      if (this.dayTime == '00' && this.hourTime == '00' && this.minuteTime == '00' && this.secondTime == '00') {
        // Perform actions when countdown reaches zero
        this.pageCountdown='00:00:00:00';
        clearInterval(countDown);
      }
      this.pageCountdown = `${this.dayTime}:${this.hourTime}:${this.minuteTime}:${this.secondTime}`;

      if (this.hourTime == '00' && this.minuteTime == '00' && this.secondTime == '00') {
        this.dayTime = (parseInt(this.dayTime) - 1).toString().padStart(2, '0');
        this.hourTime = '24';
      }

      if (this.minuteTime == '00' && this.secondTime == '00') {
        this.hourTime = (parseInt(this.hourTime) - 1).toString().padStart(2, '0');
        this.minuteTime = '60';
      }

      if (this.secondTime == '00') {
        this.minuteTime = (parseInt(this.minuteTime) - 1).toString().padStart(2, '0');
        this.secondTime = '60';
      }
      
    }, 1000);
  }
}

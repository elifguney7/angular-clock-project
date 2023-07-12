import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodro',
  templateUrl: './pomodro.component.html',
  styleUrls: ['./pomodro.component.css']
})
export class PomodroComponent implements OnInit {
  sTime: number = 0;
  bTime: number = 0;
  timerInterval: any;
  isStudyTime: boolean = true;
  responseText: string = "";
  startButton: any;
  baseTimerLabel: any;
  baseTimerPathRemaining: any;
  timeLeft: any;
  readonly FULL_DASH_ARRAY: number = 283;

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      this.timeLeft=0;
    });
    this.baseTimerPathRemaining = document.getElementById('base-timer-path-remaining');
  }

  setSTime() {
    if (isNaN(this.sTime) || this.sTime < 1 || this.sTime > 90) {
      alert("Please select between 1 and 90");
    } else {
      let sText = "You'll study for " + this.sTime + " minutes.";
      this.responseText = sText;
    }
  }

  setBTime() {
    if (isNaN(this.bTime) || this.bTime < 1 || this.bTime > 30) {
      alert("Please select between 1 and 30");
    } else {
      let bText = " After that, you can relax for " + this.bTime + " minutes.";
      this.responseText += bText;
    }
  }


  startPomodoro() {    
   if (this.isStudyTime) {
    this.baseTimerPathRemaining.style.stroke = 'pink'; 
    this.startTimer(this.sTime * 60);
   } else {
    this.baseTimerPathRemaining.style.stroke = 'blue'; 
    this.startTimer(this.bTime * 60);
   }
  }

  startTimer(timeLimit: any){
    clearInterval(this.timerInterval);
    this.timeLeft = timeLimit;
    this.timerInterval =setInterval (() => {

      this.timeLeft-= 1;
      this.baseTimerLabel = this.formatTimeLeft(this.timeLeft);
      this.setCircleDasharray(timeLimit, this.timeLeft);

    if(this.timeLeft === 0) {
      clearInterval(this.timerInterval);
      this.onTimesUp();
      if(this.isStudyTime){
        this.isStudyTime =false;
        this.startPomodoro();
      } else{
        this.isStudyTime=true;
        this.startPomodoro();
      }
    }
    },1000);
  }

  formatTimeLeft(time: number) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = parseInt(`0${seconds}`);
    }
    return `${minutes}:${seconds}`;
  }


  calculateTimeFraction(timeLimit:any, timeLeft:any) {
    const rawTimeFraction = timeLeft / timeLimit;
    return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
  }


  setCircleDasharray(timeLimit:any ,timeLeft: number) {
    const circleDasharray = `${(this.calculateTimeFraction(timeLimit, timeLeft) * this.FULL_DASH_ARRAY).toFixed(0)} ${this.FULL_DASH_ARRAY}`;
    this.baseTimerPathRemaining.setAttribute("stroke-dasharray", circleDasharray);
  }

  onTimesUp() {    
    const remainingPathColor = this.isStudyTime ? 'pink' : 'blue';
    this.baseTimerPathRemaining.style.stroke = remainingPathColor;
  }
}
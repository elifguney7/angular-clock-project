import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodro',
  templateUrl: './pomodro.component.html',
  styleUrls: ['./pomodro.component.css']
})
export class PomodroComponent {

  sTime:number= 0;
  bTime:number= 0;
  timerInterval:any;
  isStudyTime:boolean = true;
  responseText: string= "";
  
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
      this.responseText+= bText;
    }
  }


}

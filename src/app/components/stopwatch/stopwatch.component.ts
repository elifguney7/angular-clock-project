import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {
  hour: string = '00';
  min: string = '00';
  sec: string = '00';
  ms: string = '00';
  number: number = 0;
  startTimer: any;
  saveScreen:any;
  deleted: any; 

  ngOnInit() {}

  start() {
    this.startTimer = setInterval(() => {

      this.ms = (parseInt(this.ms) + 1).toString();
      this.ms = parseInt(this.ms) < 10 ? '0' + this.ms : this.ms;

      if (this.ms == '100') {        
        this.sec = (parseInt(this.sec) + 1).toString();
        this.sec = parseInt(this.sec) < 10 ? '0' + this.sec: this.sec;
        this.ms = '0' + 0;
      }

      if (this.sec == '60') {
        this.min = (parseInt(this.min) + 1).toString();
        this.min = parseInt(this.min) < 10 ? '0' + this.min : this.min;
        this.sec = '0' + 0;
      }

      if (this.min == '60') {
        this.hour = (parseInt(this.hour) + 1).toString();
        this.hour = parseInt(this.hour) < 10 ? '0'+ this.hour : this.hour;
        this.min = "0" + 0;
      }

    }, 10);
  }


stop() {
  clearInterval(this.startTimer);
}

reset(){
  clearInterval(this.startTimer);
  this.hour = this.min = this.sec = this.ms = "0" + 0;  
}

save(){
  this.number++;  
  this.saveScreen = document.querySelector(".saveReport");

  const saveLine = document.createElement('div');
  saveLine.setAttribute('id','reportLine');  

  const listNumber = document.createElement('span');
  listNumber.textContent = this.number + "- ";

  const savedTime = document.createElement('span');
  savedTime.textContent = this.hour + ":" + this.min + ":" + this.sec + ":" + this.ms;

  saveLine.appendChild(listNumber);
  saveLine.appendChild(savedTime);    

  this.saveScreen.appendChild(saveLine);
}


delete(){
  for(let i=0 ; i<this.number; i++){
    this.deleted = document.getElementById("reportLine");
    this.deleted.remove();
  }
this.number = 0;
}

}


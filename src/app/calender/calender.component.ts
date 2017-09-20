import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  date = new Date();
  totalDays = daysInMonth(this.date.getMonth(), this.date.getUTCFullYear())
  constructor() { }

  ngOnInit() {

  }
}
function daysInMonth(month: number, year: number ) {
  return new Date(year, month, 0).getDate();
}

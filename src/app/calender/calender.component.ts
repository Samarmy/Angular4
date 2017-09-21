import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  date = new Date();
  totalDays = daysInMonth(this.date.getMonth(), this.date.getUTCFullYear())
  dates: number[] = Array(this.totalDays + 1).fill(0).map((x, i) => i);
  weekDay = adjustDays(this.date.getMonth(), this.date.getUTCFullYear());
  constructor() {
    this.dates.shift();
  }

  ngOnInit() {

  }
}
function daysInMonth(month: number, year: number ) {
  return new Date(year, month, 0).getDate();
}
function adjustDays(month: number, year: number ) {
  return new Date(year, month, 1).getDay();
}

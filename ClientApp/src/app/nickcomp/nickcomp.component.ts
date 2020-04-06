import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@Component({
  selector: 'app-nickcomp',
  templateUrl: './nickcomp.component.html',
  styleUrls: ['./nickcomp.component.css']
})
export class NickcompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

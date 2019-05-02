import { Component, ViewChild, OnInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import tenDaysViewPlugin from './tenDaysGrid/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin, tenDaysViewPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    // { title: 'Event Now', start: new Date(), duration:5 },
    // tslint:disable-next-line:max-line-length
    { id: '1', resourceId: 'c', start: '2019-05-07T02:00:00', end: '2019-05-12T02:00:00', title: 'Event 1', programPriorityColour: 'red', isAirPlane: true, ignitionDays: 4, patrolDays: 2, confidenceLevel: 'High', className: 'event-tile' },
      // tslint:disable-next-line:max-line-length
      { id: '2', resourceId: 'b', start: '2019-05-01T02:00:00', end: '2019-05-06T02:00:00', title: 'Event 2', programPriorityColour: 'amber', isAirPlane: false, ignitionDays: 3, patrolDays: 3, confidenceLevel: 'High', className: 'event-tile' },
      // tslint:disable-next-line:max-line-length
      { id: '3', resourceId: 'd', start: '2019-05-03T02:00:00', end: '2019-05-07T02:00:00', title: 'Event 3', programPriorityColour: 'green', isAirPlane: true, ignitionDays: 3, patrolDays: 2, confidenceLevel: 'Low', className: 'event-tile' },
      // tslint:disable-next-line:max-line-length
      { id: '4', resourceId: 'e', start: '2019-05-02T02:00:00', end: '2019-05-03T02:00:00', title: 'Event 4', programPriorityColour: 'red', isAirPlane: false, ignitionDays: 1, patrolDays: 1, confidenceLevel: 'High', className: 'event-tile' },
      // tslint:disable-next-line:max-line-length
      { id: '5', resourceId: 'c', start: '2019-05-04T02:00:00', end: '2019-05-08T02:00:00', title: 'Event 5', programPriorityColour: 'amber', isAirPlane: true, ignitionDays: 2, patrolDays: 3, confidenceLevel: 'Low', className: 'event-tile' },
    // tslint:disable-next-line:max-line-length
      { id: '6', resourceId: 'c', start: '2019-05-02T02:00:00', end: '2019-05-10T02:00:00', title: 'Event 6', programPriorityColour: 'green', isAirPlane: false, ignitionDays: 4, patrolDays: 5, confidenceLevel: 'High', className: 'event-tile' }
  ];

  ngOnInit() {

  }


  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi(); //.rerenderEvents();
    this.calendarComponent.getApi().rerenderEvents();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }

}

import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CalendarEvent } from 'angular-calendar';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format
} from 'date-fns';
import { Observable } from 'rxjs';
import { colors } from '../../colors';
import { Reuniao } from '../../model/reuniao';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'agenda.component.html'
})
export class AgendaComponent implements OnInit {
  view: string = 'month';

  viewDate: Date = new Date();

  events$: Observable<Array<CalendarEvent<{ reuniao: Reuniao }>>>;

  activeDayIsOpen: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchEvents();
  }

  loadReunioes() {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];


    const params = new HttpParams()
      .set(
        'primary_release_date.gte',
        format(getStart(this.viewDate), 'YYYY-DD-MM')
      )
      .set(
        'primary_release_date.lte',
        format(getEnd(this.viewDate), 'YYYY-DD-MM')
      )
      .set('api_key', '0ec33936a68018857d727958dca1424f');

    return this.http.get('http://localhost:5000/api/reunioes', { params });
  }

  fetchEvents(): void {

    this.events$ = this.loadReunioes()
      .pipe(map((results: Reuniao[]) => {
          return results.map((reuniao: Reuniao) => {
            console.log(reuniao);
            return {
              title: reuniao.titulo,
              start: new Date(reuniao.data),
              color: colors.yellow,
              meta: {
                reuniao
              }
            };
          });
        })
      );
  }

  dayClicked({
    date,
    events
  }: {
      date: Date;
      events: Array<CalendarEvent<{ reuniao: Reuniao }>>;
    }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }
}
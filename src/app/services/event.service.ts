import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events = [
    {
      id: 1,
      title: 'Meeting',
      date: '2026-05-24'
    },
    {
      id: 2,
      title: 'Conference',
      date: '2026-05-25'
    }
  ];

  constructor() { }

  getEvents(): Observable<any[]> {
    return of(this.events);
  }

  addEvent(event: any): Observable<any> {
    this.events.push(event);
    return of(event);
  }

  deleteEvent(id: number): Observable<any> {
    this.events = this.events.filter(event => event.id !== id);
    return of(true);
  }
}
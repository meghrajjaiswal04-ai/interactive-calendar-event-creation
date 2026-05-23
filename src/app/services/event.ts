import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents() {
    return [
      {
        title: 'Team Meeting',
        date: '2025-07-20'
      },
      {
        title: 'Project Submission',
        date: '2025-07-22'
      },
      {
        title: 'Client Call',
        date: '2025-07-25'
      }
    ];
  }
}
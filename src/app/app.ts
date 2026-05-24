import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

  addEvent() {

    const newEvent = {
      title: 'New Event',
      date: '2025-06-01'
    };

    this.eventService.addEvent(newEvent).subscribe(() => {
      this.loadEvents();
    });
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id).subscribe(() => {
      this.loadEvents();
    });
  }
}
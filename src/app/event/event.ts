import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event.html',
  styleUrl: './event.css'
})
export class EventComponent {

  events = [
    {
      id: 1,
      name: 'Music Show',
      date: '2025-08-20',
      location: 'Delhi'
    },
    {
      id: 2,
      name: 'Tech Conference',
      date: '2025-08-25',
      location: 'Mumbai'
    }
  ];

  selectedEvent: any = null;

  editEvent(event: any) {
    this.selectedEvent = { ...event };
  }

  updateEvent() {

    const index = this.events.findIndex(
      e => e.id === this.selectedEvent.id
    );

    if (index !== -1) {
      this.events[index] = this.selectedEvent;

      alert('Event Updated Successfully');
    }

    this.selectedEvent = null;
  }

  deleteEvent(id: number) {

    this.events = this.events.filter(
      event => event.id !== id
    );

    alert('Event Deleted Successfully');
  }
}
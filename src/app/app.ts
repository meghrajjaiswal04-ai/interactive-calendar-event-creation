import { Component } from '@angular/core';
import { CalendarComponent } from './calendar/calendar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CalendarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
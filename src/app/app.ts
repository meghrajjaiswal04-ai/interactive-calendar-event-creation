import { Component } from '@angular/core';
import { EventComponent } from './event/event';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
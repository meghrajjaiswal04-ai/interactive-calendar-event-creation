import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class CalendarComponent {

  showForm = false;

  events: any[] = [];

  eventForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required]
    });

  }

  addEvent() {

    if (this.eventForm.valid) {

      this.events.push(this.eventForm.value);

      this.eventForm.reset();

      this.showForm = false;

    } else {

      this.eventForm.markAllAsTouched();

    }
  }
}
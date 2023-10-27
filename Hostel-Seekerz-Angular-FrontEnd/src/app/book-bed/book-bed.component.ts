import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-book-bed',
  templateUrl: './book-bed.component.html',
  styleUrls: ['./book-bed.component.css']
})
export class BookBedComponent {
  bookingForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private bookingService: BookingService) {
    this.bookingForm = this.formBuilder.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      beds: ['', Validators.required],
      ac: [false]
    });
  }

  bookBed() {
    if (this.bookingForm.valid) {
      this.bookingService.bookBed(this.bookingForm.value).subscribe(response => {
        if (response) {
          alert('Successfully booked your bed');
          this.bookingForm.reset();
        } else {
          alert('Failed to book bed');
        }
      });
    }
  }
}

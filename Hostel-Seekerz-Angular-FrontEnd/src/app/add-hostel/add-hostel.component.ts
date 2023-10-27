import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HostelService } from '../services/hostel.service';

@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrls: ['./add-hostel.component.css'],
})
export class AddHostelComponent {
  hostelForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private hostelService: HostelService) {
    this.hostelForm = this.formBuilder.group({
      place: ['', Validators.required],
      sharing: ['', Validators.required],
      amount: [0, Validators.required],
      hostelName: ['', Validators.required],
    });
  }

  addHostel() {
    if (this.hostelForm.valid) {
      this.hostelService.addHostel(this.hostelForm.value).subscribe(response => {
        if (response) {
          alert('Hostel added successfully');
          this.hostelForm.reset();
        } else {
          alert('Failed to add hostel');
        }
      });
    }
  }
}

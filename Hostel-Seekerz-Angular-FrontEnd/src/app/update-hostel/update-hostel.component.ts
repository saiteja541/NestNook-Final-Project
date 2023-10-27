import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostelService } from '../services/hostel.service';

@Component({
  selector: 'app-update-hostel',
  templateUrl: './update-hostel.component.html',
  styleUrls: ['./update-hostel.component.css'],
})
export class UpdateHostelComponent {
  updatedHostel: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hostelService: HostelService
  ) {
    this.route.paramMap.subscribe((params) => {
      const data = history.state.data;
      if (data) {
        this.updatedHostel = data;
      }
    });
  }

  updateHostel() {
    this.hostelService.updateHostel(this.updatedHostel).subscribe(() => {
      this.router.navigate(['/hostel-list']);
    });
  }

  deleteHostel() {
    this.hostelService.deleteHostel(this.updatedHostel.id).subscribe(() => {
      this.router.navigate(['/hostel-list']);
    });
  }
}

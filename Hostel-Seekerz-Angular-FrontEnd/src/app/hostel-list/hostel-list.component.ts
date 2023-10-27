import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostelService } from '../services/hostel.service';

@Component({
  selector: 'app-hostel-list',
  templateUrl: './hostel-list.component.html',
  styleUrls: ['./hostel-list.component.css'],
})
export class HostelListComponent implements OnInit {
  hostels: any[] = [];
  filteredHostels: any[] = [];
  searchPlace: string = ''; 

  constructor(private hostelService: HostelService, private router: Router) {}

  ngOnInit() {
    this.getHostels();
  }

  getHostels() {
    this.hostelService.getHostels().subscribe((data: any[]) => {
      this.hostels = data;
      this.filteredHostels = data; 
    });
  }

  filterByPlace() {
    this.filteredHostels = this.hostels.filter((hostel) =>
      hostel.place.toLowerCase().includes(this.searchPlace.toLowerCase())
    );
  }

  viewHostel(hostel: any) {
    this.router.navigate(['/book-bed']);
  }

  updateHostel(hostel: any) {
    const username = prompt('Enter your username');
    const password = prompt('Enter your password');
    if (username === 'admin' && password === 'password') {
      this.router.navigate(['/update-hostel'], { state: { data: hostel } });
    } else {
      alert('Invalid username or password');
    }
  }
}

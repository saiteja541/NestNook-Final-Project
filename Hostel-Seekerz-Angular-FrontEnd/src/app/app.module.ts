import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { HostelService } from './services/hostel.service';
import { BookingService } from './services/booking.service';
import { HostelListComponent } from './hostel-list/hostel-list.component';
import { AddHostelComponent } from './add-hostel/add-hostel.component';
import { BookBedComponent } from './book-bed/book-bed.component';
import { UpdateHostelComponent } from './update-hostel/update-hostel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HostelListComponent,
    AddHostelComponent,
    BookBedComponent,
    UpdateHostelComponent,
  ],
  imports: [
    BrowserModule,
    [MatDialogModule],
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    [ReactiveFormsModule],
    BrowserAnimationsModule
  ],
  providers: [HostelService, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

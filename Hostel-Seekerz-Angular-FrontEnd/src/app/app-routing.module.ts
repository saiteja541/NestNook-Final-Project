import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostelListComponent } from './hostel-list/hostel-list.component';
import { BookBedComponent } from './book-bed/book-bed.component';
import { UpdateHostelComponent } from './update-hostel/update-hostel.component';
import { AddHostelComponent } from './add-hostel/add-hostel.component';

const routes: Routes = [
  { path: 'add-hostel', component: AddHostelComponent }, 
  { path: 'hostel-list', component: HostelListComponent },
  { path: 'book-bed', component: BookBedComponent },
  { path: 'update-hostel', component: UpdateHostelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

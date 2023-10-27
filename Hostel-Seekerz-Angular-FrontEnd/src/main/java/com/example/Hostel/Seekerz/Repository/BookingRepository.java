package com.example.Hostel.Seekerz.Repository;


import org.springframework.data.repository.CrudRepository;
import com.example.Hostel.Seekerz.Entity.Booking; // Import the correct entity class

public interface BookingRepository extends CrudRepository<Booking, Long> {
}


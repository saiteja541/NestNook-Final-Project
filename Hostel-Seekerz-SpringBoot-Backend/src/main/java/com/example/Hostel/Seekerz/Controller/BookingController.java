package com.example.Hostel.Seekerz.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.Hostel.Seekerz.Entity.Booking;
import com.example.Hostel.Seekerz.Repository.BookingRepository;

import java.util.List;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin(origins = "http://localhost:4200") // Allow requests from your Angular app
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @GetMapping
    public List<Booking> getAllBookings() {
        return (List<Booking>) bookingRepository.findAll();
    }

    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    @PutMapping("/{id}")
    public Booking updateBooking(@PathVariable Long id, @RequestBody Booking updatedBooking) {
        Booking existingBooking = bookingRepository.findById(id).orElse(null);
        if (existingBooking != null) {
            existingBooking.setName(updatedBooking.getName());
            existingBooking.setContact(updatedBooking.getContact());
            existingBooking.setBeds(updatedBooking.getBeds());
            existingBooking.setAc(updatedBooking.isAc());
            return bookingRepository.save(existingBooking);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        bookingRepository.deleteById(id);
    }
}

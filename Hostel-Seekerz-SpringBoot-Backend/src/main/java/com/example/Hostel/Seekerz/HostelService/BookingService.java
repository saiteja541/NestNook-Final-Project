package com.example.Hostel.Seekerz.HostelService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Hostel.Seekerz.Entity.Booking;
import com.example.Hostel.Seekerz.Repository.BookingRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public List<Booking> getAllBookings() {
        return (List<Booking>) bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        Optional<Booking> booking = bookingRepository.findById(id);
        return booking.orElse(null);
    }

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(Long id, Booking updatedBooking) {
        Optional<Booking> optionalBooking = bookingRepository.findById(id);
        if (optionalBooking.isPresent()) {
            Booking existingBooking = optionalBooking.get();
            existingBooking.setName(updatedBooking.getName());
            existingBooking.setContact(updatedBooking.getContact());
            existingBooking.setBeds(updatedBooking.getBeds());
            existingBooking.setAc(updatedBooking.isAc());
            return bookingRepository.save(existingBooking);
        }
        return null;
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}

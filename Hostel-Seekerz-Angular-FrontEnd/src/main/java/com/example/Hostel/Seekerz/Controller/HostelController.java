package com.example.Hostel.Seekerz.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.Hostel.Seekerz.Entity.Hostel;
import com.example.Hostel.Seekerz.Repository.HostelRepository;

import java.util.List;

@RestController
@RequestMapping("/api/hostel")
@CrossOrigin(origins = "http://localhost:4200")
public class HostelController {

    @Autowired
    private HostelRepository hostelRepository;

    @GetMapping
    public List<Hostel> findAllHostels() {
        return hostelRepository.findAll();
    }

    @GetMapping("/{id}")
    public Hostel findHostelById(@PathVariable Long id) {
        return hostelRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Hostel addHostel(@RequestBody Hostel hostel) {
        return hostelRepository.save(hostel);
    }

    @PutMapping("/{id}")
    public Hostel updateHostel(@PathVariable Long id, @RequestBody Hostel updatedHostel) {
        Hostel existingHostel = hostelRepository.findById(id).orElse(null);
        if (existingHostel != null) {
            existingHostel.setPlace(updatedHostel.getPlace());
            existingHostel.setSharing(updatedHostel.getSharing());
            existingHostel.setAmount(updatedHostel.getAmount());
            return hostelRepository.save(existingHostel);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteHostel(@PathVariable Long id) {
        hostelRepository.deleteById(id);
    }
}

package com.example.Hostel.Seekerz.HostelService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Hostel.Seekerz.Entity.Hostel;
import com.example.Hostel.Seekerz.Repository.HostelRepository;

import java.util.List;
import java.util.Optional;

@Service
public class HostelService {

    private final HostelRepository hostelRepository;

    @Autowired
    public HostelService(HostelRepository hostelRepository) {
        this.hostelRepository = hostelRepository;
    }

    public List<Hostel> getAllHostels() {
        return hostelRepository.findAll();
    }

    public Hostel getHostelById(Long id) {
        Optional<Hostel> hostel = hostelRepository.findById(id);
        return hostel.orElse(null);
    }

    public Hostel createHostel(Hostel hostel) {
        return hostelRepository.save(hostel);
    }

    public Hostel updateHostel(Long id, Hostel updatedHostel) {
        Optional<Hostel> optionalHostel = hostelRepository.findById(id);
        if (optionalHostel.isPresent()) {
            Hostel existingHostel = optionalHostel.get();
            existingHostel.setPlace(updatedHostel.getPlace());
            existingHostel.setSharing(updatedHostel.getSharing());
            existingHostel.setAmount(updatedHostel.getAmount());
            return hostelRepository.save(existingHostel);
        }
        return null;
    }

    public void deleteHostel(Long id) {
        hostelRepository.deleteById(id);
    }
}

package com.example.Hostel.Seekerz.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Hostel.Seekerz.Entity.Hostel;

public interface HostelRepository extends JpaRepository<Hostel, Long> {
}

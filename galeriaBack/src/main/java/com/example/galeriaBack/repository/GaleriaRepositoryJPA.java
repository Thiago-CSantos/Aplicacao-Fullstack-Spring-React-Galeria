package com.example.galeriaBack.repository;

import com.example.galeriaBack.entitie.Galeria;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GaleriaRepositoryJPA extends JpaRepository<Galeria, UUID> {
}

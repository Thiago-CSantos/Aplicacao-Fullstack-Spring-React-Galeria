package com.example.galeriaBack.controller;

import com.example.galeriaBack.dto.GaleriaRequestDTO;
import com.example.galeriaBack.dto.GaleriaResponseDTO;
import com.example.galeriaBack.entitie.Galeria;
import com.example.galeriaBack.repository.GaleriaRepositoryJPA;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GaleriaController {

    @Autowired
    private GaleriaRepositoryJPA repository;

    @PostMapping("/galerias")
    public void saveAll(@RequestBody GaleriaRequestDTO dados) {

        Galeria galeria= new Galeria(dados);

        repository.save(galeria);
    }

    @GetMapping("/galerias")
    public List<GaleriaResponseDTO> getAll() {
        List<GaleriaResponseDTO> listaGaleria = repository.findAll().stream().map(GaleriaResponseDTO::new).toList();
        return listaGaleria;
    }

}

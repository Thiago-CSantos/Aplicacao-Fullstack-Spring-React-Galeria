package com.example.galeriaBack.controller;

import com.example.galeriaBack.dto.GaleriaRequestDTO;
import com.example.galeriaBack.dto.GaleriaResponseDTO;
import com.example.galeriaBack.entitie.Galeria;
import com.example.galeriaBack.repository.GaleriaRepositoryJPA;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("galerias")
public class GaleriaController {

    @Autowired
    private GaleriaRepositoryJPA repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveAll(@RequestBody GaleriaRequestDTO dados) {

        Galeria galeria= new Galeria(dados);

        repository.save(galeria);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<GaleriaResponseDTO> getAll() {
        List<GaleriaResponseDTO> listaGaleria = repository.findAll().stream().map(GaleriaResponseDTO::new).toList();
        return listaGaleria;
    }

}

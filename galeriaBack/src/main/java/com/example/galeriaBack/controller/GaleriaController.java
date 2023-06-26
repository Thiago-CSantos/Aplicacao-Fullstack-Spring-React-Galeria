package com.example.galeriaBack.controller;

import com.example.galeriaBack.dto.GaleriaRequestDTO;
import com.example.galeriaBack.dto.GaleriaResponseDTO;
import com.example.galeriaBack.entitie.Galeria;
import com.example.galeriaBack.repository.GaleriaRepositoryJPA;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
public class GaleriaController {

    @Autowired
    private GaleriaRepositoryJPA repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/galerias")
    public void saveAll(@RequestBody GaleriaRequestDTO dados) {

        Galeria galeria = new Galeria(dados);

        repository.save(galeria);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/galerias")
    public List<GaleriaResponseDTO> getAll() {
        List<GaleriaResponseDTO> listaGaleria = repository.findAll().stream().map(GaleriaResponseDTO::new).toList();
        return listaGaleria;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/galerias/{id}")
    public GaleriaResponseDTO getOneId(@PathVariable("id") UUID id) {

        Galeria galeria = repository.findById(id).orElseThrow(() -> new RuntimeException("Não ENCONTRADO"));

        GaleriaResponseDTO galeriaResponseDTO = new GaleriaResponseDTO(galeria);
        return galeriaResponseDTO;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/galerias/{id}")
    public void Update(@PathVariable("id") UUID id, @RequestBody GaleriaRequestDTO dados) {
        Galeria galeriaOptional = repository.findById(id).orElseThrow(() -> new RuntimeException("NÃO ENCONTRADO"));

        galeriaOptional.setTitulo(dados.titulo());
        galeriaOptional.setImage(dados.image());
        galeriaOptional.setDescricao(dados.descricao());

        repository.save(galeriaOptional);

    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/galerias/{id}")
    public void Delete(@PathVariable("id") UUID id){
        repository.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/galerias/deleteAll")
    public void deleteAll(){
        repository.deleteAll();
    }

}

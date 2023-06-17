package com.example.galeriaBack.dto;

import com.example.galeriaBack.entitie.Galeria;

import java.util.UUID;

public record GaleriaResponseDTO(UUID id, String image, String titulo, String descricao) {
    public GaleriaResponseDTO(Galeria galeria){
        this(galeria.getId(), galeria.getImage(), galeria.getTitulo(), galeria.getDescricao());
    }
}

package com.example.galeriaBack.entitie;

import com.example.galeriaBack.dto.GaleriaRequestDTO;
import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name="galeria")
public class Galeria {

    @GeneratedValue(strategy = GenerationType.UUID)
    @Id
    private UUID id;

    private String image;
    private String titulo;
    private String descricao;

    public Galeria(){}

    public Galeria(String image, String titulo, String descricao) {
        this.image = image;
        this.titulo = titulo;
        this.descricao = descricao;
    }

    public Galeria(GaleriaRequestDTO dados){
        this.image = dados.image();
        this.titulo = dados.titulo();
        this.descricao = dados.descricao();
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}

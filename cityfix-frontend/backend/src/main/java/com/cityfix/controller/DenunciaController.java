package com.cityfix.controller;

import com.cityfix.entity.Denuncia;
import com.cityfix.service.DenunciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/denuncias")
@CrossOrigin(origins = "http://localhost:5173") // Para Vite React
public class DenunciaController {

  @Autowired
  private DenunciaService denunciaService;

  @GetMapping
  public List<Denuncia> listarDenuncias() {
    return denunciaService.listarDenuncias();
  }

  @PostMapping
  public Denuncia criarDenuncia(@RequestBody Denuncia denuncia) {
    return denunciaService.salvarDenuncia(denuncia);
  }
}

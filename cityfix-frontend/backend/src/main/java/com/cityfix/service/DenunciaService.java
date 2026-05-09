package com.cityfix.service;

import com.cityfix.entity.Denuncia;
import com.cityfix.repository.DenunciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DenunciaService {

  @Autowired
  private DenunciaRepository denunciaRepository;

  public List<Denuncia> listarDenuncias() {
    return denunciaRepository.findAll();
  }

  public Denuncia salvarDenuncia(Denuncia denuncia) {
    return denunciaRepository.save(denuncia);
  }
}

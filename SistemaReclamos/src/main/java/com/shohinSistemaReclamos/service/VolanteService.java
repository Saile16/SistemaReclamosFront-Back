package com.shohinSistemaReclamos.service;

import com.shohinSistemaReclamos.entity.Volante;
import com.shohinSistemaReclamos.repository.VolanteRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VolanteService {

    @Autowired
    VolanteRepository volanteRepository;
    @Transactional
    public List<Volante> datosVolante(Volante volante){
        List<Volante> datos=volanteRepository.datosVolante(volante);
        return datos;
    }

}
package com.senai.vitor.PrjGame.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.senai.vitor.PrjGame.entities.Jogo;
import com.senai.vitor.PrjGame.repositories.JogoRepository;

@Service
public class JogoService {

	private final JogoRepository jogoRepository;
	
	@Autowired
	public JogoService (JogoRepository jogoRepository) {
		this.jogoRepository = jogoRepository;
	}
	
	public Jogo saveJogo(Jogo jogo) {
		return jogoRepository.save(jogo);
	}
	
	public Jogo getJogoById(Long id) {
		return jogoRepository.findById(id).orElse(null);
	}
	//listar todos os produtos
	public List<Jogo> getAllJogo(){
		return jogoRepository.findAll();
	}
	//apagar produto
	public void deleteProduto(Long id) {
		jogoRepository.deleteById(id);
	}
	// fazendo o update do jogo com o optional
		public Jogo updateJogo(Long id, Jogo novoJogo) {
	        Optional<Jogo> jogoOptional = jogoRepository.findById(id);
	        if (jogoOptional.isPresent()) {
	        	Jogo jogoExistente = jogoOptional.get();
	           	jogoExistente.setName(novoJogo.getName());
	        	jogoExistente.setPlataform(novoJogo.getPlataform());          
	            return jogoRepository.save(jogoExistente); 
	        } else {
	            return null; 
	        }
	    }
}

package com.jadson.curso.angular.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Todo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private Long id;
	
	@Column
	private String descricao;
	
	@Column
	private Boolean concluido;
	
	@Column
	private LocalDateTime cadastro;
	
	@Column
	private LocalDateTime dataConcluido;
	
	

}

package com.jadson.curso.angular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jadson.curso.angular.model.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long>{

}

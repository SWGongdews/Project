package com.example.project.repository;

import com.example.project.entity.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface ProductRepository extends CrudRepository<Product, Long> {
    @Override
    ArrayList<Product> findAll();
}

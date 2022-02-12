package com.example.project.repository;

import com.example.project.entity.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface ProductRepository extends CrudRepository<Product, Long> {
    @Override
    ArrayList<Product> findAll();

    @Query("select p from Product p where p.productIdx = :Id")
    Product findProduct(@Param("Id") Long productIdx);


    @Query(value = "SELECT * FROM Product ORDER BY RAND() LIMIT 3", nativeQuery = true)
    ArrayList<Product> findRamdomProduct();


    @Query(value = "SELECT * FROM Product ORDER BY RAND() LIMIT 3", nativeQuery = true)
    ArrayList<Product> findDiscountProduct();
}

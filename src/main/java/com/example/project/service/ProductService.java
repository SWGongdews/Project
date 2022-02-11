package com.example.project.service;

import com.example.project.dto.ProductForm;
import com.example.project.entity.Product;
import com.example.project.repository.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    //상품생성
    public Product create(ProductForm dto) {
        Product pro = dto.toEntity();
        if(pro.getProductIdx() != null){
            return null;
        }
        return productRepository.save(pro);

    }

    public List<Product> getAllProduct() {return productRepository.findAll();}

    public Product select(ProductForm dto) {
        Product pro = dto.toEntity();
        Product choice = productRepository.findProduct(pro.getProductIdx());
        if(choice == null) {
            return null;
        }
        return choice;

    }
}

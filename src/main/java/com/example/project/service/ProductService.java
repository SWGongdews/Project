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
    //모든 상품 조회
    public List<Product> getAllProduct() {return productRepository.findAll();}

    //특정 상품 조회
    public Product select(ProductForm dto) {
        Product pro = dto.toEntity();
        Product choice = productRepository.findProduct(pro.getProductIdx());
        if(choice == null) {
            return null;
        }
        return choice;

    }
    //이 상품 어때요?
    public List<Product> getRandomProduct() {
        return productRepository.findRamdomProduct();
    }

    //놓치면 후회할 가격!
    public List<Product> getDiscountProduct() {
        return productRepository.findDiscountProduct();
    }
}

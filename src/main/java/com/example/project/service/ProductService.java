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
    public String[] select(Long id) {
        Product choice = productRepository.findProducts(id);
        if(choice == null) {
            return null;
        }
        if(choice.getDiscountRate() == 0) {
            String[] info = {choice.getProductImage(), choice.getProductName(), choice.getProductDetail(), null, null,
                    choice.getProductPrice().toString(), choice.getProductUnit(), choice.getProductVolume(),
                    choice.getProductDetail(), choice.getProductExpirationDate()};
            return info;
        }
        else{

            String[] info = {choice.getProductImage(), choice.getProductName(), choice.getProductDetail(),
                    choice.discountPrice().toString(), choice.getDiscountRate().toString(), choice.getProductPrice().toString(),
                    choice.getProductUnit(), choice.getProductVolume(), choice.getProductDetail(),
                    choice.getProductExpirationDate()};
            return info;
        }

    }
    //이 상품 어때요?
    public List<Product> getRandomProduct() {
        return productRepository.findRamdomProduct();
    }

    //놓치면 후회할 가격!
    public List<Product> getDiscountProduct() {
        return productRepository.findDiscountProduct();
    }

    //리뷰 3개 돌파
    public List<Product> getReviewProduct() { return productRepository.reviewProduct(); }
}

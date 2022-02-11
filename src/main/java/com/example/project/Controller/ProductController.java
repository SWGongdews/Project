package com.example.project.Controller;

import com.example.project.dto.ProductForm;
import com.example.project.entity.Product;
import com.example.project.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
public class ProductController {
    @Autowired
    ProductService productService;

    //상품 만들기
    @PostMapping("products/create")
    public ResponseEntity<Product> creat(@RequestBody ProductForm dto){
        Product created=productService.create(dto);
        return (created != null) ?
                ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    //모든 상품 정보 가져오기
    @GetMapping("/products/getAll")
    public List<Product> getAllproduct(){
        return productService.getAllProduct();
    }

    //특정 상품 정보 가져오기
    @GetMapping("/products/get/{id}")
    public ResponseEntity<Product> show(@RequestBody ProductForm dto){
        Product selected=productService.select(dto);
        return (selected != null) ?
                ResponseEntity.status(HttpStatus.OK).body(selected):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }


}
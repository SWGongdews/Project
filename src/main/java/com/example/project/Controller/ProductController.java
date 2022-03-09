package com.example.project.Controller;

import com.example.project.dto.ProductForm;
import com.example.project.entity.Product;
import com.example.project.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/products/get")
    public List<Product> getAllProduct(){
        return productService.getAllProduct();
    }

    //특정 상품 정보 가져오기
    @GetMapping("/products/get/{id}")
    public ResponseEntity<String[]> show(@PathVariable Long id){
        String[] selected=productService.select(id);
        return (selected != null) ?
                ResponseEntity.status(HttpStatus.OK).body(selected):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    //이 상품 어때요?
    //@RequestParam(value="productName", required = false, defaultValue = "") String productName
    @GetMapping("products/random-items")
    public ResponseEntity<List<Product>> getRandomProduct(@RequestParam(value="title", required = false) String title){
        List<Product> productList;
        switch (title){
            case "이 상품 어때요?":
                productList=productService.getRandomProduct();
                break;
            case "놓치면 후회할 가격":
                productList=productService.getDiscountProduct();
                break;
            case "후기 3000개 돌파 상품":
                productList=productService.getReviewProduct();
                break;
//            case "지금 가장 핫한 상품":
//                break;
//            case "인기 신상품 랭킹":
//                break;

            default:
                productList = null;
                break;
        }
        return (productList != null) ?
                ResponseEntity.status(HttpStatus.OK).body(productList):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

}
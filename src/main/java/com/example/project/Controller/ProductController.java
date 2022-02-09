package com.example.project.Controller;


import com.example.project.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class ProductController {
    @Autowired
    ProductService productService;


}

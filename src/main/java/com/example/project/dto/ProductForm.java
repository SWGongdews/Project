package com.example.project.dto;

import com.example.project.entity.Product;
import lombok.AllArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;

@AllArgsConstructor
@ToString
public class ProductForm {
    private Long productIdx;
    private String productName;
    private Long productPrice;
    private String productCategory;
    private Long productUnit;
    private Long productVolume;
    private String productDelivery;
    private String productExpirationDate;
    private String productDetail;
    private String createdAt;
    private String updateAt;
    private char status;

    public Product toEntity(){
        return new Product(null, productName, productPrice, productCategory, productUnit,
                productVolume, productDelivery, productExpirationDate, productDetail, createdAt, updateAt, status);
    }
}

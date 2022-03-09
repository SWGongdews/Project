package com.example.project.dto;

import com.example.project.entity.Product;
import lombok.AllArgsConstructor;
import lombok.ToString;

import java.sql.Timestamp;

@AllArgsConstructor
@ToString
public class ProductForm {
    private Long productIdx;
    private String productName;
    private String productImage;
    private Long productPrice;
    private String productCategory;
    private Long discountRate;
    private String productUnit;
    private String productVolume;
    private String productDelivery;
    private String productExpirationDate;
    private String productDetail;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private char status;

    public Product toEntity(){
        return new Product(null, productName, productImage, productPrice, productCategory, discountRate, productUnit,
                productVolume, productDelivery, productExpirationDate, productDetail, createdAt, updatedAt, status);
    }
}

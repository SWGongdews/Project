package com.example.project.dto;

import com.example.project.entity.Product;
import lombok.AllArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@AllArgsConstructor
@ToString
public class ProductForm {
    private Long productIdx;
    private String productName;
    private String productUrl;
    private Long productPrice;
    private String productCategory;
    private Long discountRate;
    private Long discountPrice = productPrice-(productPrice * (discountRate/100));
    private String productUnit;
    private String productVolume;
    private String productDelivery;
    private String productExpirationDate;
    private String productDetail;
    private Timestamp createdAt;
    private Timestamp updatedAt;
    private char status;

    public Product toEntity(){
        return new Product(null, productName, productUrl, productPrice, productCategory, discountRate, discountPrice,
                productUnit, productVolume, productDelivery, productExpirationDate, productDetail, createdAt, updatedAt, status);
    }
}

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
    //discount 외래키 추가하기
    private String productName;
    private String productImage;
    private Long productPrice;
    private String productCategory;
    private Long productUnit;
    private Long productVolume;
    private String productDelivery;
    private String productExpirationDate;
    private String productDetail;
    private Timestamp createdAt;
    private Timestamp updateAt;
    private char status;

    public Product toEntity(){
        return new Product(null, productName, productImage, productPrice, productCategory, productUnit,
                productVolume, productDelivery, productExpirationDate, productDetail, createdAt, updateAt, status);
    }
}

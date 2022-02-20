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
    private Long product_Idx;
    private String product_Name;
    private String product_Image;
    private Long product_Price;
    private String product_Category;
    private Long discount_Rate;
    private Long product_Unit;
    private Long product_Volume;
    private String product_Delivery;
    private String product_ExpirationDate;
    private String product_Detail;
    private Timestamp createdAt;
    private Timestamp updated_at;
    private char status;

    public Product toEntity(){
        return new Product(null, product_Name, product_Image, product_Price, product_Category, discount_Rate, product_Unit,
                product_Volume, product_Delivery, product_ExpirationDate, product_Detail, createdAt, updated_at, status);
    }
}

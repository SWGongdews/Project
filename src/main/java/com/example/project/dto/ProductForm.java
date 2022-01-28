package com.example.project.dto;

import com.example.project.entity.Product;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class ProductForm {
    private Long productId;
    private String name;
    private Long price;
    private String category;
    private Long unit;
    private Long volume;
    private String delivery;
    private String expirationDate;
    private String detail;

    public Product toEntity(){
        return new Product(null, name, price, category, unit,
                volume, delivery, expirationDate, detail);
    }
}

package com.example.project.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class Product {
    @Id //상품고유코드
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_idx")
    private Long productIdx;
    @Column(name = "product_name") //상품명
    private String productName;
    @Column(name = "product_image") //상품이미지
    private String productUrl;
    @Column(name = "product_price") //상품가격
    private Long productPrice;
    @Column(name = "product_category") //상품카테고리
    private String productCategory;
    @Column(name = "discount_rate") //할인율
    private Long discountRate;
    @Column(name = "discount_price") //할인가격
    private Long discountPrice;
    @Column(name = "product_unit") //판매 단위
    private String productUnit;
    @Column(name = "product_volume") //판매 용량
    private String productVolume;
    @Column(name = "product_delivery") //배송구분
    private String productDelivery;
    @Column(name = "product_expiration_date") //유통기한
    private String productExpirationDate;
    @Column(name = "product_detail") //상품세부설명
    private String productDetail;

    @Column(name = "created_at",nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp createdAt;

    @Column(name="updated_at",nullable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp updatedAt;

    @ColumnDefault("N") //판매중단 상태인지
    private char status;

    public Long discountPrice(){
        Long discountPrice = productPrice-(productPrice * (discountRate/100));
        return discountPrice;
    }

    public Product(String productName, String productUrl, Long productPrice, String productCategory, Long discountRate,
                   String productUnit, String productVolume, String productDelivery, String productExpirationDate,
                   String productDetail, Timestamp createdAt, Timestamp updatedAt, char status){
        this.productName = productName;
        this.productUrl = productUrl;
        this.productPrice = productPrice;
        this.productCategory = productCategory;
        this.discountRate = discountRate;
        this.discountPrice = this.productPrice-(this.productPrice * (this.discountRate/100));
        this.productUnit = productUnit;
        this.productVolume = productVolume;
        this.productDelivery = productDelivery;
        this.productExpirationDate = productExpirationDate;
        this.productDetail = productDetail;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
    }
}

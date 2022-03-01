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
    private Long productIdx;
    @Column //상품명
    private String productName;
    @Column //상품이미지
    private String productImage;
    @Column //상품가격
    private Long productPrice;
    @Column //상품카테고리
    private String productCategory;
    @Column //할인율
    private Long discountRate;
    @Column //판매 단위
    private Long productUnit;
    @Column //판매 용량
    private Long productVolume;
    @Column //배송구분
    private String productDelivery;
    @Column //유통기한
    private String productExpirationDate;
    @Column //상품세부설명
    private String productDetail;

    @Column(nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp createdAt;

    @Column(nullable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp updatedAt;

    @ColumnDefault("N") //판매중단 상태인지
    private char status;

    public Long discountPrice(){
        return productPrice-(productPrice * (discountRate/100));
    }
}

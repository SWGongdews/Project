package com.example.project.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productIdx;
    @Column
    private String productName;
    @Column
    private String productImage;
    @Column
    private Long productPrice;
    @Column
    private String productCategory;
    @Column
    private Long productUnit;
    @Column
    private Long productVolume;
    @Column
    private String productDelivery;
    @Column
    private String productExpirationDate;
    @Column
    private String productDetail;
    @Column
    private String createdAt;
    @Column
    private String updateAt;
    @Column
    private char status;

}

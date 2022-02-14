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

    @Column(nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp createdAt;

    @Column(nullable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp updateAt;

    @ColumnDefault("N") //판매중단 상태인지
    private char status;

}

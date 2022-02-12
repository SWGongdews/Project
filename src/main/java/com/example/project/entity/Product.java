package com.example.project.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productIdx;
    //discount 외래키 추가하기
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

    @ColumnDefault("N")
    private char status;

}

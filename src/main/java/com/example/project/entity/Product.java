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
    private Long product_Idx;
    @Column
    private String product_Name;
    @Column
    private String product_Image;
    @Column
    private Long product_Price;
    @Column
    private String product_Category;
    @Column
    private Long discount_Rate;
    @Column
    private Long product_Unit;
    @Column
    private Long product_Volume;
    @Column
    private String product_Delivery;
    @Column
    private String product_ExpirationDate;
    @Column
    private String product_Detail;

    @Column(nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp createdAt;

    @Column(nullable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp updated_at;

    @ColumnDefault("N") //판매중단 상태인지
    private char status;

}

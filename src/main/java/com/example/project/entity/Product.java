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
    private Long productId;
    @Column
    private String name;
    @Column
    private Long price;
    @Column
    private String category;
    @Column
    private Long unit;
    @Column
    private Long volume;
    @Column
    private String delivery;
    @Column
    private String expirationDate;
    @Column
    private String detail;
}

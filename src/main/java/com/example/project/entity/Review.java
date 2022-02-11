package com.example.project.entity;

import lombok.*;
import javax.persistence.*;
import java.sql.Date;

@Getter
@Setter
@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;
    @Column
    private Long productId;
    @Column
    private Long userIdx;
    @Column
    private String reviewTitle;
    @Column
    private String reviewContent;
    @Column
    private Date reviewDate;
    @Column
    private String reviewImage;
    @Column
    private String createdAt;
    @Column
    private String updatedAt;
    @Column
    private short status;
}

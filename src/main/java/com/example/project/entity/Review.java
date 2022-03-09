package com.example.project.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDateTime;

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
    private Long orderIdx;
    @Column
    private String reviewTitle;
    @Column
    private String reviewContent;
    @Column
    private Date reviewDate;
    @Column
    private String reviewImage;

    @Column(updatable = false)
    @CreatedDate
    private LocalDateTime createdAt; //엔티티의 생성 시간

    @Column
    private String updatedAt;

    @Column(columnDefinition = "char")
    @ColumnDefault("N")
    private String status;
}

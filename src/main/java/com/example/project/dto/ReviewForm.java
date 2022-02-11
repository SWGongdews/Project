package com.example.project.dto;

import com.example.project.entity.Review;
import com.example.project.entity.User;
import lombok.AllArgsConstructor;
import lombok.ToString;
import java.sql.Date;

@ToString
@AllArgsConstructor
public class ReviewForm {
    private Long reviewId; //리뷰 고유 id
    private Long productId; //상품 id
    private Long userIdx; //고객의 고유 id
    private String reviewTitle; //리뷰 제목
    private String reviewContent; //리뷰 내용
    private Date reviewDate;//리뷰 작성일
    private String reviewImage; //리뷰에 담기는 사진
    private String createdAt; //생성 시간
    private String updatedAt; //업데이트 시간
    private short status;//상태(리뷰 작성 전,후)

    public Review toEntity(){
        return new Review(null, productId,userIdx, reviewTitle,
                reviewContent,reviewDate, reviewImage, createdAt, updatedAt, status);
    }

}

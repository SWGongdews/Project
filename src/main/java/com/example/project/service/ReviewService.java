package com.example.project.service;

import com.example.project.dto.ReviewForm;
import com.example.project.entity.Review;
import com.example.project.repository.ReviewRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    //리뷰 생성
    public Review created(ReviewForm dto) {
        Review review=dto.toEntity();
        reviewRepository.save(review);
        return review;
    }
    //해당 유저의 작성가능 리뷰 반환
    public List<Review> before(ReviewForm dto) {
        Review review = dto.toEntity();
        return reviewRepository.Unwritten(review.getUserIdx());
    }
    //해당 유저의 작성한 리뷰 반환
    public List<Review> after(ReviewForm dto) {
        Review review = dto.toEntity();
        return reviewRepository.Written(review.getUserIdx());
    }
    public Review statusUpdate(Long reviewidx){
        Review target = reviewRepository.findById(reviewidx).orElse(null);
        target.setStatus("N");
        return reviewRepository.save(target);
    }

}

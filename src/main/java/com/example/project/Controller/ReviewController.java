package com.example.project.Controller;

import com.example.project.dto.ReviewForm;
import com.example.project.entity.Review;
import com.example.project.service.ReviewService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
public class ReviewController {
    @Autowired
    ReviewService reviewService;

    //구매한 물건에 대한 후기를 작성하면 Review entity 생성
    @PostMapping("/review/{userIdx}")
    public ResponseEntity<Review> created(@RequestBody ReviewForm dto){
        Review created=reviewService.created(dto);
        return (created != null) ?
                ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    //user의 작성가능한 리뷰를 프론트에 전송
    @GetMapping("/review/before")
    public List<Review> before(@RequestBody ReviewForm dto){
        List<Review> review=reviewService.before(dto);
        return review;
    }
    //user의 작성가능한 리뷰를 프론트에 전송
    @GetMapping ("/review/after")
    public List<Review> after(@RequestBody ReviewForm dto){
        List<Review> review=reviewService.after(dto);
        return review;
    }
}

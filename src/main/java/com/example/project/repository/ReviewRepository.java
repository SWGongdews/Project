package com.example.project.repository;

import com.example.project.entity.Review;
import com.example.project.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends CrudRepository<Review, Long> {

    //작성가능 후기는 1(true)
    @Query("select r from Review r where r.userIdx = :userIdx and r.status = 1")
    List<Review> Unwritten(@Param("userIdx") Long userIdx);

    //작성한 후기는 0(false)
    @Query("select r from Review r where r.userIdx = :userIdx and r.status = 0")
    List<Review> Written(@Param("userIdx") Long userIdx);
}

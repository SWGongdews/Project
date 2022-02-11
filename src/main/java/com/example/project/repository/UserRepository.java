package com.example.project.repository;

import com.example.project.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;

public interface UserRepository extends CrudRepository<User, Long> {
    @Override
    ArrayList<User> findAll();


    //email 전체 조회
    @Query("select u from User u where u.userEmail = :userEmail")
    User findByEmailCheck(@Param("userEmail") String userEmail);

    //아이디 비번 일치 확인
    @Query("select u from User u where u.userID = :id and u.userPassword= :password")
    User findByProfile(@Param("id") String userId, @Param("password") String userPassword);

    //아이디 중복확인
    @Query("select u from User u where u.userID = :id")
    User checkDuplicaionById(@Param("id") String id);

    //이메일 중복확인
    @Query("select u from User u where u.userEmail = :email")
    User checkDuplicaionByEmailAddress(@Param("email") String email);

    //비밀번호 조회
    @Query("select u from User u where u.userID = :id and u.userPhoneNum = :phoneNum")
    User findByPw(@Param("id") String id, @Param("phoneNum") String phoneNum);
}

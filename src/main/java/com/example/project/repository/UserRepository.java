package com.example.project.repository;

import com.example.project.dto.UserForm;
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
    User checkDuplicaionByEmail(@Param("email") String email);

    //아이디 찾기-휴대폰 인증
    @Query("select u from User u where u.userPhoneNum= :PhoneNum and u.userName= :Name")
    User findidByPhone(@Param("Name") String userName, @Param("PhoneNum") String userPhoneNum);
    //아이디 찾기-이메일 인증
    @Query("select u from User u where u.userEmail= :Email and u.userName= :Name")
    User findidByEmail(@Param("Name") String userName, @Param("Email") String userEmail);

    //비밀번호 조회-휴대폰 인증
    @Query("select u from User u where u.userID = :id and u.userPhoneNum = :phoneNum")
    User findpwByPhone(@Param("id") String id, @Param("phoneNum") String phoneNum);
    //비밀번호 조회-이메일 인증
    @Query("select u from User u where u.userID = :id and u.userEmail = :email")
    User findpwByEmail(@Param("id") String id, @Param("email") String email);

    //수정할 회원 정보 조회-> id로 조회
    @Query("select u from User u where u.userID = :id")
    User findUser(@Param("id") String id);

    @Query("select u from User u where u.userEmail = :email")
    User findUserByEmail(@Param("email") String email);
}

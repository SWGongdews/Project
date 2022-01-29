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
    @Query("select u from User u where u.email = :email")
    User findByEmailCheck(@Param("email") String email);
}

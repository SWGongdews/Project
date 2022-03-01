package com.example.project.repository;

import com.example.project.entity.ExpiredRefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpiredRefreshTokenRepository extends JpaRepository<ExpiredRefreshToken,Long> {
    boolean existsByToken(String token);
}

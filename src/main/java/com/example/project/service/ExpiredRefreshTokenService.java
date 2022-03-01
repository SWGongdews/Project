package com.example.project.service;

import com.example.project.entity.ExpiredRefreshToken;
import com.example.project.repository.ExpiredRefreshTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ExpiredRefreshTokenService {
    private final ExpiredRefreshTokenRepository expiredRefreshTokenRepository;
    public boolean isExpiredToken(String token) {
        return expiredRefreshTokenRepository.existsByToken(token);
    }

    public ExpiredRefreshToken addExpiredToken(String token) {
        ExpiredRefreshToken saveToken = ExpiredRefreshToken.builder()
                .token(token)
                .build();
        return expiredRefreshTokenRepository.save(saveToken);
    }
}

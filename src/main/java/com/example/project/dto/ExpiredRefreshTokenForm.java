package com.example.project.dto;

import com.example.project.entity.ExpiredRefreshToken;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class ExpiredRefreshTokenForm {
    private Long id;
    private String token;

}

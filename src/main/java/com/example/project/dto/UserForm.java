package com.example.project.dto;

import com.example.project.entity.User;
import lombok.AllArgsConstructor;
import lombok.ToString;

import java.util.Set;

@AllArgsConstructor
@ToString
public class UserForm {
    private Long userIdx;
    private String userID;
    private String userPassword;
    private String userName;
    private String userEmail;
    private String userPhoneNum;
    private String userLocation;
    private String userGender;
    private String userBirth;
    private String createdAt;
    private String updateAt;
    private char status;

    public User toEntity() {
        return new User(null, userID, userPassword, userName, userEmail, userPhoneNum,
                userLocation, userGender, userBirth, createdAt, updateAt, status);
    }
}

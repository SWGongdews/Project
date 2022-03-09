package com.example.project.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.example.project.entity.User;
import lombok.AllArgsConstructor;
import lombok.ToString;
import java.util.Set;
import lombok.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
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

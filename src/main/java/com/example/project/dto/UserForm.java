package com.example.project.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.example.project.entity.User;
<<<<<<< HEAD
import lombok.AllArgsConstructor;
import lombok.ToString;

import java.util.Set;

=======
import lombok.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@Setter
@Builder
>>>>>>> seungjun
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


//        return User.builder()
//                .userIdx(null)
//                .userID(userID)
//                .userPassword(userPassword)
//                .userName(userName)
//                .userEmail(userEmail)
//                .userPhoneNum(userPhoneNum)
//                .userLocation(userLocation)
//                .userGender(userGender)
//                .userBirth(userBirth)
//                .createdAt(createdAt)
//                .updateAt(updateAt)
//                .status(status)
//                .authorities(authorities)
//                .build();
//    }

    public User toEntity() {
        return new User(null, userID, userPassword, userName, userEmail, userPhoneNum,
                userLocation, userGender, userBirth, createdAt, updateAt, status);

    }
}

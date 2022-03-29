package com.example.project.dto;

import com.example.project.entity.Authority;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.example.project.entity.User;
import lombok.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Collections;
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
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
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

    private Set<AuthorityForm> authorityFormSet;

    public User toEntity() {
        Authority authority = Authority.builder()
                .authorityName("ROLE_USER")
                .build();

       User user=User.builder()
               .userID(userID)
               .userPassword(userPassword)
               .userName(userName)
               .userEmail(userEmail)
               .userPhoneNum(userPhoneNum)
               .userLocation(userLocation)
               .userGender(userGender)
               .userBirth(userBirth)
               .createdAt(createdAt)
               .updateAt(updateAt)
               .status(status)
               .authorities(Collections.singleton(authority))
               .build();
       return user;
    }
    public static UserForm from(User user) {
        if(user == null) return null;

        return UserForm.builder()
                .userID(user.getUserID())
                .userPassword(user.getUserPassword())
                .userName(user.getUserName())
                .userEmail(user.getUserEmail())
                .userPhoneNum(user.getUserPhoneNum())
                .userLocation(user.getUserLocation())
                .userGender(user.getUserGender())
                .userBirth(user.getUserBirth())
                .createdAt(user.getCreatedAt())
                .updateAt(user.getUpdateAt())
                .status(user.getStatus())
                .authorityFormSet(user.getAuthorities().stream()
                        .map(authority -> AuthorityForm.builder().authorityName(authority.getAuthorityName()).build())
                        .collect(Collectors.toSet()))
                .build();
    }
}

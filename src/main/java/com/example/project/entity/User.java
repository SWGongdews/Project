package com.example.project.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userIdx;
    @Column
    private String userID;
    @Column
    private String userPassword;
    @Column
    private String userName;
    @Column
    private String userEmail;
    @Column
    private String userPhoneNum;
    @Column
    private String userLocation;
    @Column
    private String userGender;
    @Column
    private String userBirth;
    @Column
    private String createdAt;
    @Column
    private String updateAt;
    @Column
    private char status;
}

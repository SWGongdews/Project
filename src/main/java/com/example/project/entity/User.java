package com.example.project.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="user")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_idx")
    private Long userIdx;
    @Column(nullable = false, name="userid")
    private String userID;
    @Column(nullable = false, name="user_password")
    private String userPassword;
    @Column(name="user_name")
    private String userName;
    @Column(nullable = false, name="user_email")
    private String userEmail;
    @Column(name="user_phone_num")
    private String userPhoneNum;
    @Column(name="user_location")
    private String userLocation;
    @Column(name="user_gender")
    private String userGender;
    @Column(name="user_birth")
    private String userBirth;
    @Column(name="created_at")
    private String createdAt;
    @Column(name="update_at")
    private String updateAt;
    @ColumnDefault("Y")
    private char status;


    //유저 정보 수정
    public void patch(User user) {
        if(user.getUserName()!=null){
            this.userName = user.userName;
        }
        if(user.getUserEmail()!=null){
            this.userEmail = user.userEmail;
        }
        if(user.getUserPhoneNum()!=null){
            this.userPhoneNum = user.userPhoneNum;
        }
        if(user.getUserLocation()!=null){
            this.userLocation = user.userLocation;
        }
        if(user.getUserGender()!=null){
            this.userGender = user.userGender;
        }
        if(user.getUserBirth()!=null){
            this.userBirth = user.userBirth;
        }
        if(user.getCreatedAt()!=null){
            this.createdAt = user.createdAt;
        }
        //수정 필요
        if(user.getUpdateAt()!=null){
            this.updateAt = user.updateAt;
        }
        this.status='Y';
    }


}

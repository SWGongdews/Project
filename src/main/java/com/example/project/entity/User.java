package com.example.project.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userIdx;
    @Column(nullable = false)
    private String userID;
    @Column(nullable = false)
    private String userPassword;
    @Column
    private String userName;
    @Column(nullable = false)
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
    @Column(columnDefinition="VARCHAR(4) default 'Y'")
    private char status;

    @ManyToMany
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "userId", referencedColumnName = "userId")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
    private Set<Authority> authorities;




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

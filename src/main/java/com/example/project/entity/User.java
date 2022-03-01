package com.example.project.entity;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Builder
public class User implements UserDetails {
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

    public Collection<? extends GrantedAuthority> getAuthorities(){
        return getAuthorities();
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }

    public void patch(User user) {
        if(user.getUsername()!=null){
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

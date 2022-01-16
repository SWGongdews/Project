package com.example.loginhome.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor //디폴트 생성자 만들어주는 어노테이션
@ToString
@Getter //Article객체의 id return해주는 getId()함수 사용 가능
public class Home {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //회원코드

    @Column
    private String username; //아이디
    @Column
    private String password; //비밀번호
    @Column
    private String password_check; //비밀번호 확인
    @Column
    private String name; //이름
    @Column
    private String birth; //생년월일
    @Column
    private String department; //학과

    public void patch(Home user){
        if(user.username!=null){
            this.username=user.username;
        }
        if(user.password!=null){
            this.password=user.password;
        }
        if(user.password_check!=null){
            this.password_check=user.password_check;
        }
        if(user.name!=null){
            this.name=user.name;
        }
        if(user.birth!=null){
            this.birth=user.birth;
        }
        if(user.department!=null){
            this.department=user.department;
        }
    }
}

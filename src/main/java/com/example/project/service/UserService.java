package com.example.project.service;

import com.example.project.dto.UserForm;
import com.example.project.entity.User;
import com.example.project.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    //전체 User조회 함수
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    //user생성
    public User create(UserForm dto) {
        User user = dto.toEntity();
        if(user.getUserIdx() != null){
            log.info("getUserIdx에서 오류 발생");
            return null;
        }
        return userRepository.save(user);
    }

    //아이디 중복체크
    public User idCheck(UserForm dto){
        User user=dto.toEntity();
        User check = userRepository.checkDuplicaionById(user.getUserID());
        if(check==null){
            return null;
        }
        return check;
    }

    //로그인
    public User login(UserForm dto) {
        User user = dto.toEntity(); //사용자가 입력한 정보를 갖는 객체
        User login = userRepository.findByProfile(user.getUserID(), user.getUserPassword()); //아이디와 비밀번호를 전달
        if(login==null){ //아이디와 비밀번호가 일치하는 객체가 없을 때
            return null;
        }
        return login; //아이디와 비밀번호가 일치할 때
    }

    public User findpw(UserForm dto) {
        User user=dto.toEntity();
        User pw = userRepository.findByPw(user.getUserID(), user.getUserPhoneNum());
        if(pw==null){
            return null;
        }
        return pw;
    }
}

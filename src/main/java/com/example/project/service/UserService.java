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
    public String[] completed(UserForm dto) {
        User user = dto.toEntity();
        String[] info = {user.getUserID(),user.getUserName(),user.getUserEmail()};
        return info;
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
    //이메일 중복체크
    public User emailCheck(UserForm dto) {
        User user= dto.toEntity();
        User check = userRepository.checkDuplicaionByEmail(user.getUserEmail());
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
    //아이디 찾기-휴대폰 인증
    public User findidPhone(String name, String phone) {
        User idP=userRepository.findidByPhone(name,phone);
        if(idP==null){
            return null;
        }
        return idP;
    }
    //아이디 찾기-이메일 인증
    public User findidEmail(String name, String email) {
        User idE=userRepository.findidByEmail(name ,email);
        if(idE==null){
            return null;
        }
        return idE;
    }
    //비번찾기-휴대폰 인증
    public User findpwPhone(String id, String phone) {
        User pwP = userRepository.findpwByPhone(id, phone);
        if(pwP==null){
            return null;
        }
        return pwP;
    }
    //비번찾기-이메일 인증
    public User findpwEmail(String id, String email) {
        User pwE = userRepository.findpwByEmail(id, email);
        if(pwE==null){
            return null;
        }
        return pwE;
    }
    //개인 정보 수정 페이지에 미리 정보(아이디, 이름 , 이메일, 휴대폰, 현재 비밀번호) 세팅
    public String[] set(UserForm dto) {
        User user = dto.toEntity();
        String[] info = {user.getUserID(), user.getUserName(), user.getUserEmail(),
        user.getUserPhoneNum(),user.getUserPassword()};
        return info;
    }
    //개인 정보 수정
    public User update(UserForm dto) {
        User user = dto.toEntity();
        User target = userRepository.findUser(user.getUserID());
        //회원 아이디 조회 실패인 경우에 예외 처리
        if(target==null){
            return null;
        }
        target.patch(user);
        User updated= userRepository.save(target);
        return updated;

    }
    public User getUser(String email) {
        User user = userRepository.findUserByEmail(email);
        return user;
    }

}

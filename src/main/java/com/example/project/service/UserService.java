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
            return null;
        }
        return userRepository.save(user);
    }
//    public User emailCheck(UserForm dto) {
//        User user = dto.toEntity(); //사용자가 입력한 정보를 갖는 객체
//        User check = userRepository.findByEmailCheck(user.getUserEmail());   //이메일 중복확인 쿼리로 이동[중복일경우 유저객체 반환, 아닐경우 반환없음]
//        if (check == null) {  //check가 중복이 아닐 경우
//            log.info("중복아님");
//            return null;
//        } else return check;   //check가 중복일 반환
//    }
    //로그인
    public User login(UserForm dto) {
        User user = dto.toEntity(); //사용자가 입력한 정보를 갖는 객체
        User login = userRepository.findByProfile(user.getUserID(), user.getUserPassword()); //이메일을 건내서 해당 객체 반환
        if(login==null){
            return null;
        }
        return login;
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
    public User emailCheck(UserForm dto){
        User user=dto.toEntity();
        User check = userRepository.checkDuplicaionByEmailAddress(user.getUserEmail());
        if(check==null){
            return null;
        }
        return check;
    }
}

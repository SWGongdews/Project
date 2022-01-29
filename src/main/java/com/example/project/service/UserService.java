package com.example.project.service;

import com.example.project.dto.UserForm;
import com.example.project.entity.User;
import com.example.project.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Slf4j
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User create(UserForm dto) {
        User user = dto.toEntity();
        if(user.getUserIdx() != null){
            return null;
        }
        return userRepository.save(user);
    }

    public User emailCheck(UserForm dto) {
        User user = dto.toEntity(); //사용자가 입력한 정보를 갖는 객체
        User check = userRepository.findByEmailCheck(user.getUserEmail());   //이메일 중복확인 쿼리로 이동[중복일경우 유저객체 반환, 아닐경우 반환없음]
        if(check == null){  //check가 중복이 아닐 경우
            log.info("중복아님");
            return null;
        }
        else return check;   //check가 중복일 반환
    }
}

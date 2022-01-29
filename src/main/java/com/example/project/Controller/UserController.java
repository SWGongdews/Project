package com.example.project.Controller;

import com.example.project.dto.UserForm;
import com.example.project.entity.User;
import com.example.project.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
public class UserController {
    @Autowired
    private UserService userService;


    //모든 회원 정보 가져오기
    @GetMapping("/users/getAll")
    public List<User> getAllusers(){
        return userService.getAllUsers();
    }

    //회원가입할 때, 잘 입력됐으면 정보 전송
    @PostMapping("users/signup")
    public ResponseEntity<User> create(@RequestBody UserForm dto){
        log.info(dto.toString());
        User created = userService.create(dto);
        return (created != null) ?
                ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    //아이디 중복확인-> 존재하면 true return, 비어있으면
    @PostMapping("/api/check/email")
    public boolean idCheck(@RequestBody UserForm dto){
        User duplicated = userService.idCheck(dto);
        return (duplicated != null) ?
                false: true;
    }
    //이메일 중복확인-> 존재하면 true return, 비어있으면
    @PostMapping("/api/check/email")
    public boolean emailCheck(@RequestBody UserForm dto){
        User duplicated = userService.emailCheck(dto);
        return (duplicated != null) ?
                false: true;
    }
    //로그인후 MyPage로 정보 전송
    @PostMapping("/users/findidphone")
    public ResponseEntity<User> login(@RequestBody UserForm dto){
        log.info(dto.toString());
        User login = userService.login(dto);
        return (login != null) ?
                ResponseEntity.status(HttpStatus.OK).body(login):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}

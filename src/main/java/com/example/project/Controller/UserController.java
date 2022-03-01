package com.example.project.Controller;

import com.example.project.dto.UserForm;
import com.example.project.entity.User;
import com.example.project.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping("/users/signup")
    public ResponseEntity<User> create(@RequestBody UserForm dto){
        log.info(dto.toString());
        User created = userService.create(dto);
        return (created != null) ?
                ResponseEntity.status(HttpStatus.OK).body(created):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    //회원가입 완료 페이지에 아이디 이름 이메일 전송
    @PostMapping("/users/complete")
    public ResponseEntity<String[]> complete(@RequestBody UserForm dto){
        String[] completed = userService.completed(dto);
        return (completed != null) ?
                ResponseEntity.status(HttpStatus.OK).body(completed):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    //아이디 중복확인-> 중복되는 아이디가 없으면 true return, 아이디가 중복되면 false return
    @PostMapping("/users/duplicationidcheck ")
    public boolean idCheck(@RequestBody UserForm dto){
        User duplicated = userService.idCheck(dto);
        return (duplicated != null) ? //중복되는 아이디가 있으면
                false: true;
    }
    //이메일 중복확인 -> 중복되는 이메일이 없으면 true return, 이메일이 중복되면 false return
    @PostMapping("/users/duplicationemailcheck")
    public boolean emailCheck(@RequestBody UserForm dto){
        User duplicated = userService.emailCheck(dto);
        return (duplicated!=null)?
                false:true;
    }


    //로그인에서 아이디와 비번일치 확인
    @PostMapping("/users/login")
    public ResponseEntity<User> login(@RequestBody UserForm dto){
        log.info(dto.toString());
        User login = userService.login(dto);
        return (login != null) ?
                ResponseEntity.status(HttpStatus.OK).body(login):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    //아이디 찾기-이름,전화번호 받아옴
    @PostMapping("/users/findidphone")
    public ResponseEntity<User> findIdPhone(@RequestParam(value="userName", required = false, defaultValue = "") String userName,
                                            @RequestParam(value="userPhoneNum",required = false, defaultValue = "01041606749") String userPhoneNum){
        User find = userService.findidPhone(userName, userPhoneNum);
        return (find != null) ?
                ResponseEntity.status(HttpStatus.OK).body(find):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    //아이디 찾기-이름, 이메일 받아옴
    @PostMapping("/users/findidemail")
    public ResponseEntity<User> findIdEmail(@RequestParam(value="userName", required = false) String userName,
                                            @RequestParam(value="userEmail",required = false) String userEmail){
        User find = userService.findidEmail(userName, userEmail);
        return (find != null) ?
                ResponseEntity.status(HttpStatus.OK).body(find):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    //비밀번호 찾기-아이디, 휴대폰 번호 받아옴
    @PostMapping("/users/findpw/id")
    public ResponseEntity<User> findPwPhone(@RequestParam(value="userId", required = false) String userId,
                                       @RequestParam(value="userPhoneNum",required = false) String userPhoneNum){
        User find = userService.findpwPhone(userId, userPhoneNum);
        return (find != null) ?
                ResponseEntity.status(HttpStatus.OK).body(find):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    //비밀번호 찾기-아이디, 이메일 받아옴
    @PostMapping("/users/findpw/email")
    public ResponseEntity<User> findPwEmail(@RequestParam(value="userId", required = false) String userId,
                                       @RequestParam(value="userEmail",required = false) String userEmail){
        User find = userService.findpwEmail(userId, userEmail);
        return (find != null) ?
                ResponseEntity.status(HttpStatus.OK).body(find):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
//    @PostMapping("/users/modifypw")
//    public ResponseEntity<User> modifyPw(@RequestParam(value="userPw", required = false) String userPw){
//        User modify = userService.
//    }

    //개인 정보 수정 페이지에 미리 정보(아이디, 이름 , 이메일, 휴대폰, 현재 비밀번호) 세팅
    @PostMapping("/users/update/before")
    public ResponseEntity<String[]> setUser(@RequestBody UserForm dto){
        String[] modified = userService.set(dto);
        return (modified != null) ?
                ResponseEntity.status(HttpStatus.OK).body(modified):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    //개인 정보 수정
    @PatchMapping("/users/update")
    public ResponseEntity<User> updateUser(@RequestBody UserForm dto){
        User updated= userService.update(dto);
        return (updated!=null)?
                ResponseEntity.status(HttpStatus.OK).body(updated):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

}

package com.example.loginhome.api;

import com.example.loginhome.dto.HomeForm;
import com.example.loginhome.entity.Home;
import com.example.loginhome.repository.HomeRepository;
import com.example.loginhome.service.HomeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
public class HomeApiController {
    @Autowired
    private HomeService homeService;
    //모든 회원 정보 가져오기(GET)
    @GetMapping("/api/users")
    public List<Home> index(){return homeService.index();}

    //회원 정보 가져오기(Get)
    @GetMapping("/api/users/{id}")
    public Home show(@PathVariable Long id){
        return homeService.show(id);
    }

    //회원 정보 수정(PATCH)
    @PatchMapping("/api/users/{id}")
    public ResponseEntity<Home> update(@PathVariable Long id,
                                       @RequestBody HomeForm dto){
        Home updated = homeService.update(id, dto);
        return (updated!=null)?
                ResponseEntity.status(HttpStatus.OK).body(updated):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
    //회원 정보 삭제(DELETE)
    @DeleteMapping("/api/users/{id}")
    public ResponseEntity<Home> delete(@PathVariable Long id){
        Home deleted = homeService.delete(id);
        return (deleted!=null)?
                ResponseEntity.status(HttpStatus.OK).body(deleted):
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

}

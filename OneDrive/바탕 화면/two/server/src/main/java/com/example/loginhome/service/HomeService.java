package com.example.loginhome.service;

import com.example.loginhome.dto.HomeForm;
import com.example.loginhome.entity.Home;
import com.example.loginhome.repository.HomeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class HomeService {
    @Autowired
    private HomeRepository homeRepository;
    //전체 user조회 함수
    public List<Home> index() {
        return homeRepository.findAll();
    }
    //user조회 함수
    public Home show(Long id) {
        return homeRepository.findById(id).orElse(null);
    }

    //user수정 함수
    public Home update(Long id, HomeForm dto) {
        //수정용 엔티티 생성
        Home user = dto.toEntity();
        //대상 엔티티 조회
        Home target=homeRepository.findById(id).orElse(null);
        //잘못된 요청 처리
        if(target==null || id!=user.getId()){
            System.out.println("target error!!!!!!!!!!");
            return null;
        }
        target.patch(user);
        Home updated=homeRepository.save(target);
        return updated;
    }

    //user삭제 함수
    public Home delete(Long id) {
        Home target = homeRepository.findById(id).orElse(null);
        if(target==null){
            return null;
        }
        homeRepository.delete(target);
        return target;
    }


}

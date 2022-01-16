package com.example.loginhome.controller;

import com.example.loginhome.dto.HomeForm;
import com.example.loginhome.entity.Home;
import com.example.loginhome.repository.HomeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@Slf4j
public class HomeController {
    @Autowired
    private HomeRepository homeRepository;
    //회원가입 홈페이지
    @GetMapping("/home")
    public String newHomeForm(){
        return "home";
    }
    //로그인 페이지
    @GetMapping("/login")
    public String loginHome(){
        return "users/login";
    }
    //회원가입 후 회원정보를 받아오고 MyPage로 redirect
    @PostMapping("/home/create")
    public String createHome(HomeForm form){
        log.info(form.toString());
        //Dto를 Entity로 변환
        Home home =form.toEntity();
        log.info(form.toString());
        //레퍼지토리에 entity를 DB안에 저장하게 함!
        Home saved= homeRepository.save(home);
        log.info(saved.toString());
        return "redirect:/users/"+saved.getId();
    }
    //MyPage
    @GetMapping("/users/{id}")
    public String MyPage(@PathVariable Long id, Model model){
        log.info("id="+id);

        //id로 데이터를 가져옴
        Home homeEntity = homeRepository.findById(id).orElse(null);
        //가져온 데이터를 모델에 등록
        model.addAttribute("home",homeEntity);

        return "users/show";
    }
    //MyPage에서 회원 정보 수정
    @GetMapping("/users/{id}/edit")
    public String edit(@PathVariable long id, Model model){
        Home homeEntity=homeRepository.findById(id).orElse(null);
        model.addAttribute("home",homeEntity);
        return "users/edit";
    }
    //수정정보 업데이트
    @PostMapping("/users/update")
    public String update(HomeForm form){
        Home homeEntity = form.toEntity();
        Home target = homeRepository.findById(homeEntity.getId()).orElse(null);
        if(target!=null){
            homeRepository.save(homeEntity);
        }
        return "redirect:/users/"+homeEntity.getId();
    }
    @GetMapping("/users/{id}/delete")
    public String delete(@PathVariable Long id, RedirectAttributes rttr){
        log.info("삭제요청");
        Home target=homeRepository.findById(id).orElse(null);
        //삭제
        if(target!=null){
            homeRepository.delete(target);
            rttr.addFlashAttribute("msg","계정 탈퇴가 완료되었습니다.");
        }
        return "redirect:/login";
    }
}

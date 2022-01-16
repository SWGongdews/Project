package com.example.loginhome.dto;

import com.example.loginhome.entity.Home;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class HomeForm {
    private Long id;
    private String username;
    private String password;
    private String password_check;
    private String name;
    private String birth;
    private String department;
    public Home toEntity(){

        return new Home(id, username, password, password_check, name,
                birth, department);
    }
}

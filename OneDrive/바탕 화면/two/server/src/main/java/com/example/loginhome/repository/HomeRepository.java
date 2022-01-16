package com.example.loginhome.repository;

import com.example.loginhome.entity.Home;
import org.springframework.data.repository.CrudRepository;
import java.util.ArrayList;

public interface HomeRepository extends CrudRepository<Home, Long> {
    @Override
    ArrayList<Home> findAll();
}

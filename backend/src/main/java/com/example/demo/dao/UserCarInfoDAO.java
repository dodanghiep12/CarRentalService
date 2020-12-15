package com.example.demo.dao;

import com.example.demo.entities.CarStock;
import com.example.demo.entities.UserCarInfo;

import java.util.List;

public interface UserCarInfoDAO {
    List<UserCarInfo> fetchAll();
    UserCarInfo fetchById(int theId);
    void save(UserCarInfo userCarInfo);
    void deleteById(int theId);
}

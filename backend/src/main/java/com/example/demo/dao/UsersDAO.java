package com.example.demo.dao;

import com.example.demo.entities.UserCarInfo;
import com.example.demo.entities.Users;

import java.util.List;

public interface UsersDAO {
    List<Users> fetchAll();
    Users fetchById(int theId);
    void save(Users users);
    void deleteById(int theId);
}

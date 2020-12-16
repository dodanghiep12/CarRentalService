package com.example.demo.controllers;


import com.example.demo.dao.UserCarInfoDAO;
import com.example.demo.entities.UserCarInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class UserCarInfoController {

    private final UserCarInfoDAO userCarInfoDAO;

    @Autowired
    public UserCarInfoController(UserCarInfoDAO userCarInfoDAO) {
        this.userCarInfoDAO = userCarInfoDAO;
    }

    //This is a GET request that will read a list of all the UserCarInfo.
    //http://localhost:8080/retrieveAllUserCarInfos
    @GetMapping("/retrieveAllUserCarInfos")
    public List<UserCarInfo> findAll() {
        return userCarInfoDAO.fetchAll();
    }

    //This is a POST request to add a new UserCarInfo.
    //http://localhost:8080/addUserCarInfo
    @PostMapping("/addUserCarInfo")
    public UserCarInfo addUserCarInfo(@RequestBody UserCarInfo userCarInfo) {
        userCarInfo.setId(0);

        userCarInfoDAO.save(userCarInfo);
        return userCarInfo;
    }

    //This is a PUT request to update an existing UserCarInfo.
    //http://localhost:8080/updateUserCarInfo
    @PutMapping("/updateUserCarInfo")
    public UserCarInfo updateUserCarInfo(@RequestBody UserCarInfo updateUserCarInfo) {
        //this will execute an update instead of a create
        userCarInfoDAO.save(updateUserCarInfo);
        return updateUserCarInfo;
    }

    //This is a DELETE request to delete an existing set.
    //http://localhost:8080/deleteUserCarInfo/1
    @DeleteMapping("/deleteUserCarInfo/{UserCarInfoId}")
    public String deleteUserCarInfo(@PathVariable int UserCarInfoId) {

        //Creating a tempUserCarInfo to check to see if it exists the in the DB
        UserCarInfo tempUserCarInfo = (UserCarInfo) userCarInfoDAO.fetchById(UserCarInfoId);

        //This will throw an exception if the UserCarInfo is null
        if (tempUserCarInfo == null) {
            throw new RuntimeException("UserCarInfo is not found : " + UserCarInfoId);
        }

        //This will execute the deleteByID.
        userCarInfoDAO.deleteById(UserCarInfoId);
        return "Deleted UserCarInfo id : " + UserCarInfoId;
    }

}

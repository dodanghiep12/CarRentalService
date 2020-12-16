package com.example.demo.controllers;

import com.example.demo.dao.UsersDAO;
import com.example.demo.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class UsersController {

    private final UsersDAO usersDAO;

    @Autowired
    public UsersController(UsersDAO usersDAO) {
        this.usersDAO = usersDAO;
    }

    //This is a GET request that will read a list of all the users.
    //http://localhost:8080/retrieveAllUsers
    @GetMapping("/retrieveAllUsers")
    public List<Users> findAll() {
        return usersDAO.fetchAll();
    }

    //Get a user by their ID
    @GetMapping("/findUserById/{Id}")
    public Users findById(@PathVariable int Id){
        return usersDAO.fetchById(Id);
    }

    //Get a user with a password and username combination
//    @GetMapping("/findUserByLogin/{username}/{password}")
//    public Object findByLogin(@PathVariable String username, @PathVariable String password){
//        return myDAO.fetchByLogin(username,password);
//    }

    //This is a POST request to add a new user.
    //http://localhost:8080/addUser
    @PostMapping("/addUser")
    public Users addUser(@RequestBody Users theUser) {
        //also just in case they pass an id in JSON .... set id to o
        //this is to force a save of new item .... instead of update
        theUser.setId(0);

        //This will call the usersDqoImpl.save method to save a new user
        //through the usersDAO interface SPRING
        usersDAO.save(theUser);
        return theUser;
    }

    //This is a PUT request to update an existing user.
    //http://localhost:8080/updateUser
    @PutMapping("/updateUser")
    public Users updateUser(@RequestBody Users updateUser) {
        //this will execute an update instead of a create
        usersDAO.save(updateUser);
        return updateUser;
    }

    //This is a DELETE request to delete an existing user.
    //http://localhost:8080/deleteUser/1
    @DeleteMapping("/deleteUser/{userId}")
    public String deleteUser(@PathVariable int userId) {
        //Creating a tempUser to check to see if a user exists
        Users tempUser = (Users) usersDAO.fetchById(userId);

        //This will throw an exception if the employee is null
        if(tempUser == null) {
            return "User doesn't exist";
        }

        //This will execute the deleteByID.
        usersDAO.deleteById(userId);
        return "Deleted user id : " + userId;
    }
}

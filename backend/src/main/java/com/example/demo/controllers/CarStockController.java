package com.example.demo.controllers;

import com.example.demo.dao.CarStockDAO;
import com.example.demo.entities.CarStock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//This is to allow calls from React
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class CarStockController {

    private final CarStockDAO carStockDAO;

    @Autowired
    public CarStockController(CarStockDAO carStockDAO) {
        this.carStockDAO = carStockDAO;
    }

    //This is a GET request that will read a list of all the carStocks.
    //http://localhost:8080/retrieveAllCarStocks
    @GetMapping("/retrieveAllCarStocks")
    public List<CarStock> findAll() {
        return carStockDAO.fetchAll();
    }

    //This is a POST request to add a new carStock.
    //http://localhost:8080/addCarStock
    @PostMapping("/addCarStock")
    public CarStock addCarStock(@RequestBody CarStock carStocks) {

        carStocks.setId(0);

        carStockDAO.save(carStocks);
        return carStocks;
    }

    //This is a PUT request to update an existing carStock.
    //http://localhost:8080/updateCarStock
    @PutMapping("/updateCarStock")
    public CarStock updateCarStock(@RequestBody CarStock updateCarStock) {
        //this will execute an update instead of a create
        carStockDAO.save(updateCarStock);
        return updateCarStock;
    }

    //This is a DELETE request to delete an existing set.
    //http://localhost:8080/deleteCarStock/1
    @DeleteMapping("/deleteCarStock/{CarStocktId}")
    public String deleteCarStock(@PathVariable int CarStockId) {

        //Creating a tempCarStock to check to see if it exists the in the DB
        CarStock tempCarStock = (CarStock) carStockDAO.fetchById(CarStockId);

        //This will throw an exception if the CarStock is null
        if (tempCarStock == null) {
            throw new RuntimeException("CarStock is not found : " + CarStockId);
        }

        //This will execute the deleteByID.
        carStockDAO.deleteById(CarStockId);
        return "Deleted CarStock id : " + CarStockId;
    }
}

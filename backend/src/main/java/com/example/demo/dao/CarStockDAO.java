package com.example.demo.dao;

import com.example.demo.entities.CarStock;

import java.util.List;

public interface CarStockDAO {
    List<CarStock> fetchAll();
    CarStock fetchById(int theId);
    void save(CarStock carStock);
    void deleteById(int theId);
}

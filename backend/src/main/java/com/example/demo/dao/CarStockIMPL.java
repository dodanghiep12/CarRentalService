package com.example.demo.dao;

import com.example.demo.entities.CarStock;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class CarStockIMPL implements CarStockDAO {

    private final EntityManager entityManager;

    @Autowired
    public CarStockIMPL(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public List<CarStock> fetchAll() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<CarStock> myQuery = currentSession.createQuery("from CarStock");
        return myQuery.getResultList();
    }

    @Override
    @Transactional
    public CarStock fetchById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.get(CarStock.class, theId);
    }

    @Override
    @Transactional
    public void save(CarStock carStock) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(carStock);
    }

    @Override
    @Transactional
    public void deleteById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        CarStock myCarStock = currentSession.get(CarStock.class, theId);
        currentSession.delete(myCarStock);
    }
}

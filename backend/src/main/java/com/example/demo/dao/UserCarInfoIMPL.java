package com.example.demo.dao;

import com.example.demo.entities.UserCarInfo;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class UserCarInfoIMPL implements  UserCarInfoDAO {

    private final EntityManager entityManager;

    @Autowired
    public UserCarInfoIMPL(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public List<UserCarInfo> fetchAll() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<UserCarInfo> myQuery = currentSession.createQuery("from UserCarInfo");
        return myQuery.getResultList();
    }

    @Override
    @Transactional
    public UserCarInfo fetchById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.get(UserCarInfo.class, theId);
    }

    @Override
    @Transactional
    public void save(UserCarInfo userCarInfo) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(userCarInfo);
    }

    @Override
    @Transactional
    public void deleteById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        UserCarInfo myUserCarInfo = currentSession.get(UserCarInfo.class, theId);
        currentSession.delete(myUserCarInfo);
    }
}

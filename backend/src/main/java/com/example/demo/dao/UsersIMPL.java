package com.example.demo.dao;

import com.example.demo.entities.Users;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class UsersIMPL implements  UsersDAO {

    private final EntityManager entityManager;

    @Autowired
    public UsersIMPL(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public List<Users> fetchAll() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Users> myQuery = currentSession.createQuery("from Users");
        return myQuery.getResultList();
    }

    @Override
    @Transactional
    public Users fetchById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.get(Users.class, theId);
    }

    @Override
    @Transactional //fetch by login.
    public Object fetchByLogin(String userName,String password) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query query = currentSession.createQuery("from Users where :name like user_name and :pwd like password");
        query.setParameter("name",userName);
        query.setParameter("pwd",password);
        return query.getResultList();
    }

    @Override
    @Transactional
    public void save(Users users) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(users);
    }

    @Override
    @Transactional
    public void deleteById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        Users myUser = currentSession.get(Users.class, theId);
        currentSession.delete(myUser);
    }
}

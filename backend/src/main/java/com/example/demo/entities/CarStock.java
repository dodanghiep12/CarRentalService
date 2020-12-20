package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "carstock")
public class CarStock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "image")
    private String image;

    @Column(name = "brand")
    private String brand;

    @Column(name = "color")
    private String color;

    @Column(name = "year")
    private String yearMade;

    public CarStock() {}

    public CarStock(String image, String brand, String color, String yearMade) {
        this.image = image;
        this.brand = brand;
        this.color = color;
        this.yearMade = yearMade;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getYearMade() {
        return yearMade;
    }

    public void setYearMade(String yearMade) {
        this.yearMade = yearMade;
    }

    @Override
    public String toString() {
        return "CarStock{" +
                "id=" + id +
                ", image='" + image + '\'' +
                ", brand='" + brand + '\'' +
                ", color='" + color + '\'' +
                ", yearMade='" + yearMade + '\'' +
                '}';
    }
}

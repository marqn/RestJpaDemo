package com.example;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;

    public String first;
    public String second;

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirst(String first) {
        this.first = first;
    }

    public void setSecond(String second) {
        this.second = second;
    }

    public Long getId() {
        return id;
    }

    public String getFirst() {
        return first;
    }

    public String getSecond() {
        return second;
    }
}

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

    public Word(String first, String second) {
        this.first = first;
        this.second = second;
    }
}

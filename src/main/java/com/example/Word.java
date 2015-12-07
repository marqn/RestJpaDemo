package com.example;


import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;


@Entity
public class Word {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;

    public String first;
    public String second;
    public Integer refresh;
    public Integer wiem;
    public Integer niewiem;

    @UpdateTimestamp
    public Date createdData;

    public Integer getRefresh() {
        return refresh;
    }

    public void setRefresh(Integer refresh) {
        this.refresh = refresh;
    }

    public Integer getWiem() {
        return wiem;
    }

    public void setWiem(Integer wiem) {
        this.wiem = wiem;
    }

    public Integer getNiewiem() {
        return niewiem;
    }

    public void setNiewiem(Integer niewiem) {
        this.niewiem = niewiem;
    }

    public Date getCreatedData() {
        return createdData;
    }

    public void setCreatedData(Date createdData) {
        this.createdData = createdData;
    }

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

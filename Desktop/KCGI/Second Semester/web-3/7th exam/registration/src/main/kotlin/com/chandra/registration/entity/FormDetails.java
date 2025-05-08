package com.chandra.registration.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "musimum_survay")
public class FormDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firstName;
    private String lastName;
    private String address;
    private String questionOne;
    private String questionTwo;
    private String questionThree;
    private String questionFour;
    private String questionFive;
    private String questionSix;
    private String questionSeven;
    private String questionEight;
    private String questionNine;
    private String questionTen;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getQuestionOne() {
        return questionOne;
    }

    public void setQuestionOne(String questionOne) {
        this.questionOne = questionOne;
    }

    public String getQuestionTwo() {
        return questionTwo;
    }

    public void setQuestionTwo(String questionTwo) {
        this.questionTwo = questionTwo;
    }

    public String getQuestionThree() {
        return questionThree;
    }

    public void setQuestionThree(String questionThree) {
        this.questionThree = questionThree;
    }

    public String getQuestionFour() {
        return questionFour;
    }

    public void setQuestionFour(String questionFour) {
        this.questionFour = questionFour;
    }

    public String getQuestionFive() {
        return questionFive;
    }

    public void setQuestionFive(String questionFive) {
        this.questionFive = questionFive;
    }

    public String getQuestionSix() {
        return questionSix;
    }

    public void setQuestionSix(String questionSix) {
        this.questionSix = questionSix;
    }

    public String getQuestionSeven() {
        return questionSeven;
    }

    public void setQuestionSeven(String questionSeven) {
        this.questionSeven = questionSeven;
    }

    public String getQuestionEight() {
        return questionEight;
    }

    public void setQuestionEight(String questionEight) {
        this.questionEight = questionEight;
    }

    public String getQuestionNine() {
        return questionNine;
    }

    public void setQuestionNine(String questionNine) {
        this.questionNine = questionNine;
    }

    public String getQuestionTen() {
        return questionTen;
    }

    public void setQuestionTen(String questionTen) {
        this.questionTen = questionTen;
    }

    @Override
    public String toString() {
        return "FormDetails{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", address='" + address + '\'' +
                ", questionOne='" + questionOne + '\'' +
                ", questionTwo='" + questionTwo + '\'' +
                ", questionThree='" + questionThree + '\'' +
                ", questionFour='" + questionFour + '\'' +
                ", questionFive='" + questionFive + '\'' +
                ", questionSix='" + questionSix + '\'' +
                ", questionSeven='" + questionSeven + '\'' +
                ", questionEight='" + questionEight + '\'' +
                ", questionNine='" + questionNine + '\'' +
                ", questionTen='" + questionTen + '\'' +
                '}';
    }
}

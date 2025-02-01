package com.chandra.registration.controller;

import com.chandra.registration.entity.FormDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class FormController {
    @GetMapping("/")
    public String home() {
        return "index";
    }
    @PostMapping("/qestions")
    public String qestion(@ModelAttribute FormDetails u )
    {
        System.out.println(u);
        return "redirect:/";
    }
}

package com.httm.logisticbe.dto;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class sampleDTO {
    private int id;
    
    private String name;
    private String size;
    private String extension;
    private int isTrain;
    private String urlImage;
    private String description;
    
    

}

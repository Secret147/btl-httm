package com.httm.logisticbe.dto;

import java.util.Date;

import lombok.Data;

@Data
public class labelDTO {
	private int id;
	private String name;
	private String description;
	private Date createAt;

}

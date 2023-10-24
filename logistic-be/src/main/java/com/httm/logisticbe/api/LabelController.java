package com.httm.logisticbe.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.httm.logisticbe.entity.labelEntity;
import com.httm.logisticbe.service.*;

@RestController
@CrossOrigin
public class LabelController {
	@Autowired
	LabelDAO service;
	
	@GetMapping("/getLabels")
	public List<labelEntity> getLabels() {
		return service.getLabels();
	}
}

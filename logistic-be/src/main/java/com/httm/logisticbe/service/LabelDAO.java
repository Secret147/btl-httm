package com.httm.logisticbe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.httm.logisticbe.entity.labelEntity;
import com.httm.logisticbe.repository.labelRepository;

@Service
public class LabelDAO {
	@Autowired
	private labelRepository repo;
	
	public List<labelEntity> getLabels() {
		return repo.findAll();
	}
}

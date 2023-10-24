package com.httm.logisticbe.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.httm.logisticbe.dto.labelDTO;
import com.httm.logisticbe.entity.labelEntity;

public interface labelService {
	List<labelDTO> getAllLabel();
	labelDTO getLabel(int id);
	void saveLabel(labelDTO label);
	void updateLabel(labelDTO label);
	void deleteLabel(int id);
	List<labelEntity> searchLabel(String key);
	

}

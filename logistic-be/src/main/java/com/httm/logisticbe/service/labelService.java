package com.httm.logisticbe.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.httm.logisticbe.dto.labelDTO;

public interface labelService {
	List<labelDTO> getAllLabel();
	labelDTO getLabel(Long id);
	void saveLabel(labelDTO label);
	void updateLabel(labelDTO label);
	void deleteLabel(Long id);
	

}

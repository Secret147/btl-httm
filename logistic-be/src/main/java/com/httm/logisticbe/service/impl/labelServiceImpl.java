package com.httm.logisticbe.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import com.httm.logisticbe.repository.labelRepository;
import com.httm.logisticbe.service.labelService;
import com.httm.logisticbe.entity.labelEntity;
import com.httm.logisticbe.converter.labelConverter;
import com.httm.logisticbe.dto.labelDTO;

@Service
public class labelServiceImpl implements labelService {
	@Autowired
	private labelRepository labelRe;
	@Autowired
	private labelConverter labelCo;
	
	@Override
	public List<labelDTO> getAllLabel(){
		List<labelEntity> labelEntitys = labelRe.findAll();
		List<labelDTO>  labelDTOs = new ArrayList<labelDTO>(); 
		for(labelEntity x : labelEntitys) {
			labelDTOs.add(labelCo.toDTO(x));
		}
		return labelDTOs;
	}
	
	@Override
	public labelDTO getLabel(Long id) {
		labelEntity label = labelRe.findById(id).get();
		return labelCo.toDTO(label);
	}
	
	@Override
	public void saveLabel(labelDTO labelDTO) {
		labelRe.save(labelCo.toEntity(labelDTO));
	}
	
	@Override
	public void updateLabel(labelDTO labelDTO) {
		labelRe.save(labelCo.toEntity(labelDTO));
		
	}
	
	@Override
	public void deleteLabel(Long id) {
		labelEntity label = labelRe.findById(id).get();
		labelRe.delete(label);
	}

}

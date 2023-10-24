package com.httm.logisticbe.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.text.Normalizer;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
	public labelDTO getLabel(int id) {
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
	public void deleteLabel(int id) {
		labelEntity label = labelRe.findById(id).get();
		labelRe.delete(label);
	}
	@Override
	public List<labelEntity> searchLabel(String keyword) {
        String normalizedKeyword = StringUtils.hasText(keyword) ? normalizeText(keyword) : "";
        List<labelEntity> allLabelnull = new ArrayList<>();
        List<labelEntity> allLabels = labelRe.findAll();
        if(keyword != "") {
        return allLabels.stream()
                .filter(label -> normalizeText(label.getName()).contains(normalizedKeyword))
                .collect(Collectors.toList());
        }
        else {
        	return allLabelnull;
        }
    }
    
    private String normalizeText(String text) {
        return StringUtils.hasText(text) ? Normalizer.normalize(text, Normalizer.Form.NFD)
                .replaceAll("\\p{M}", "")
                .toLowerCase() : "";
    }

}

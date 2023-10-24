package com.httm.logisticbe.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.httm.logisticbe.converter.sampleConverter;
import com.httm.logisticbe.dto.sampleDTO;
import com.httm.logisticbe.entity.sampleEntity;
import com.httm.logisticbe.repository.sampleRepository;
import com.httm.logisticbe.service.sampleService;

@Service
public class sampleServiceImpl implements sampleService{
	@Autowired
	private sampleRepository sampleRe;
	@Autowired
	private sampleConverter sampleCo;
	
	@Override
	public List<sampleDTO> getListSampleById(int id){
		List<sampleEntity> sample = sampleRe.findAllByLabel_Id(id);
		List<sampleDTO> sampleDTO = new ArrayList<sampleDTO>();
		for(sampleEntity x :sample) {
			sampleDTO.add(sampleCo.toDTO(x));
		}
		return sampleDTO;
	}
	@Override
	public sampleDTO getSample(int id) {
		sampleEntity sample = sampleRe.findById(id).get();
		return sampleCo.toDTO(sample);
	}

}

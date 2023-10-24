package com.httm.logisticbe.converter;

import org.springframework.stereotype.Component;

import com.httm.logisticbe.dto.sampleDTO;
import com.httm.logisticbe.entity.sampleEntity;

@Component
public class sampleConverter {
	
	public sampleEntity toEntity(sampleDTO sampleDTO) {
		sampleEntity sampleEntity = new sampleEntity();
		sampleEntity.setId(sampleDTO.getId());
		sampleEntity.setName(sampleDTO.getName());
		sampleEntity.setSize(sampleDTO.getSize());
		sampleEntity.setExtension(sampleDTO.getExtension());
		sampleEntity.setUrlImage(sampleDTO.getUrlImage());
		sampleEntity.setDescription(sampleDTO.getDescription());
		return sampleEntity;
	}
	public sampleDTO toDTO(sampleEntity sampleEntity) {
		sampleDTO sampleDTO = new sampleDTO();
		sampleDTO.setId(sampleEntity.getId());
		sampleDTO.setName(sampleEntity.getName());
		sampleDTO.setSize(sampleEntity.getSize());
		sampleDTO.setExtension(sampleEntity.getExtension());
		sampleDTO.setUrlImage(sampleEntity.getUrlImage());
		sampleDTO.setDescription(sampleEntity.getDescription());
		return sampleDTO;
	}

}

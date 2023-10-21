package com.httm.logisticbe.converter;

import com.httm.logisticbe.entity.labelEntity;

import org.springframework.stereotype.Component;

import com.httm.logisticbe.dto.labelDTO;

@Component
public class labelConverter {
	public labelDTO toDTO(labelEntity labelEntity) {
		labelDTO labelDTO = new labelDTO();
		labelDTO.setId(labelEntity.getId());
		labelDTO.setName(labelEntity.getName());
		labelDTO.setDescription(labelEntity.getDescription());
		labelDTO.setCreateAt(labelEntity.getCreateAt());
		return labelDTO;
	}
	public labelEntity toEntity(labelDTO labelDTO) {
		labelEntity labelEntity = new labelEntity();
		labelEntity.setId(labelDTO.getId());
		labelEntity.setName(labelDTO.getName());
		labelEntity.setDescription(labelDTO.getDescription());
		labelEntity.setCreateAt(labelDTO.getCreateAt());
		return labelEntity;
	}

}

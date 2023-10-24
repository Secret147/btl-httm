package com.httm.logisticbe.service;

import java.util.List;

import com.httm.logisticbe.dto.sampleDTO;

public interface sampleService {
	List<sampleDTO> getListSampleById(int id);
	sampleDTO getSample(int id);

}

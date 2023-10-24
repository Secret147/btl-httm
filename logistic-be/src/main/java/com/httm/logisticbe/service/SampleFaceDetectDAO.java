package com.httm.logisticbe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.httm.logisticbe.entity.SampleFaceDetect;
import com.httm.logisticbe.repository.SampleFaceDetectRepository;

@Service
public class SampleFaceDetectDAO {
	@Autowired
	SampleFaceDetectRepository spfRepo;
	
	public List<SampleFaceDetect> getSampleFaceDetects() {
		return spfRepo.findAll();
	}
	public SampleFaceDetect getSampleFaceDetectById(int id) {
		return spfRepo.findById(id).orElse(null);
	}
	public boolean AddNewSampleFaceDetect(SampleFaceDetect sp) {
		SampleFaceDetect sample= spfRepo.save(sp);
		return sample != null;
	}
	public boolean updateSampleFaceDetect(SampleFaceDetect sp) {
		SampleFaceDetect sample= spfRepo.save(sp);
		return sample != null;
	}
	
	public boolean deleteSampleFaceDetectById(int id) {
		boolean status = false;
		try {
			spfRepo.deleteById(id);
			status = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
}

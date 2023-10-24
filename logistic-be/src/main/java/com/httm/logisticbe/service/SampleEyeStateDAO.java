package com.httm.logisticbe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.httm.logisticbe.entity.sampleEntity;
import com.httm.logisticbe.repository.sampleRepository;

@Service
public class SampleEyeStateDAO {
	@Autowired
	sampleRepository repo;
	
	public List<sampleEntity> getSampleEyeStates() {
		return repo.findAll();
	}
	public sampleEntity getSampleEyeStateById(int id) {
		return repo.findById(id).orElse(null);
	}
	public boolean AddNewSampleEyeState(sampleEntity sp) {
		try {
			if (repo.findByName(sp.getName()) == null) {
				sampleEntity sample = repo.save(sp);
				return sample != null;
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
		
	}

	public boolean updateSampleEyeState(sampleEntity sp) {
		try {
			sampleEntity sample = repo.save(sp);
			return sample != null;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
	public boolean deleteSampleEyeStateById(int id) {
		boolean status = false;
		try {
			repo.deleteById(id);
			status = true;
		} catch (Exception e) {
			// TODO: handle exception
		}
		return status;
	}
}

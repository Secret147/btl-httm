package com.httm.logisticbe.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.httm.logisticbe.dto.sampleDTO;
import com.httm.logisticbe.service.sampleService;

@RestController
@CrossOrigin
@RequestMapping("/sample")
public class sampleAPI {
	@Autowired
	private sampleService sampleSe;
	
	@GetMapping("/allsample/{id}")
	public ResponseEntity<?> getSampleByLabel_Id(@PathVariable("id") int id){
		List<sampleDTO> samples = sampleSe.getListSampleById(id);
		return ResponseEntity.ok(samples);
	}
	
	@GetMapping("/onesample/{id}")
	public ResponseEntity<?> getOneSample(@PathVariable("id") int id){
		sampleDTO sample = sampleSe.getSample(id);
		return ResponseEntity.ok(sample);
	}

}

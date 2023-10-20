package drowsiness.server.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import drowsiness.server.model.SampleFaceDetect;
import drowsiness.server.services.SampleFaceDetectDAO;

@RestController
@CrossOrigin
public class SampleFaceDetectController {
	
	@Autowired
	SampleFaceDetectDAO service;
	
	@GetMapping("/getSampleFaceDetects")
	public List<SampleFaceDetect> getSampleFaceDetects() {
		return service.getSampleFaceDetects();
	}
	
	@GetMapping("sampleFaceDetect/{id}")
	public SampleFaceDetect getSampleFaceDetectByID(@PathVariable String id) {
		try {
			int idSampe = Integer.parseInt(id);
			return service.getSampleFaceDetectById(idSampe);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@PostMapping("/addSampleFaceDetect")
	public boolean addNewSampleFaceDetect(@RequestBody SampleFaceDetect sample) {
		return service.AddNewSampleFaceDetect(sample);
	}
	
	@PostMapping("/updateSampleFaceDetect")
	public ResponseEntity<?> updateSampleFaceDetect(@RequestBody SampleFaceDetect sample) {
		Map<String, Boolean> status = new HashMap<>();
		status.put("status", service.updateSampleFaceDetect(sample));
		return ResponseEntity.ok(status);
	}
}

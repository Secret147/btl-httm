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

import drowsiness.server.model.SampleEyeState;
import drowsiness.server.services.SampleEyeStateDAO;

@CrossOrigin
@RestController
public class SampleEyeStateController {
	@Autowired
	SampleEyeStateDAO service;
	
	@GetMapping("/getSampleEyeStates")
	public List<SampleEyeState> getSampleEyeStates() {
		return service.getSampleEyeStates();
	}
	
	@GetMapping("sampleEyeState/{id}")
	public SampleEyeState getSampleEyeStateByID(@PathVariable String id) {
		try {
			int idSampe = Integer.parseInt(id);
			return service.getSampleEyeStateById(idSampe);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@PostMapping("/addSampleEyeState")
	public boolean addNewSampleEyeState(@RequestBody SampleEyeState sample) {
		return service.AddNewSampleEyeState(sample);
	}
	
	@PostMapping("/updateSampleEyeState")
	public ResponseEntity<?> updateSampleEyeState(@RequestBody SampleEyeState sample) {
		Map<String, Boolean> status = new HashMap<>();
		status.put("status", service.updateSampleEyeState(sample));
		return ResponseEntity.ok(status);
	}
}

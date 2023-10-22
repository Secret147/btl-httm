package drowsiness.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import drowsiness.server.model.Label;
import drowsiness.server.services.LabelDAO;

@RestController
@CrossOrigin
public class LabelController {
	@Autowired
	LabelDAO service;
	
	@GetMapping("/getLabels")
	public List<Label> getLabels() {
		return service.getLabels();
	}
}

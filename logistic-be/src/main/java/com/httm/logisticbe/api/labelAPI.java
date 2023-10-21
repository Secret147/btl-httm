package com.httm.logisticbe.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.httm.logisticbe.dto.labelDTO;
import com.httm.logisticbe.entity.labelEntity;
import com.httm.logisticbe.repository.labelRepository;
import com.httm.logisticbe.service.labelService;

@RestController
@CrossOrigin
@RequestMapping("/label")
public class labelAPI {
	@Autowired
	private labelService labelSe;
	@Autowired
	private labelRepository labelRe;
	
	@GetMapping("/alllabel")
	public ResponseEntity<?> getAllLabel(){
		if(labelSe.getAllLabel()!=null) {
			return ResponseEntity.ok(labelSe.getAllLabel());
		}
		else {
			return ResponseEntity.badRequest().body("Not found list label");
		}
	}
	@GetMapping("/label/{id}")
	public ResponseEntity<?> getLabel(@PathVariable("id") Long id){
		if(labelSe.getLabel(id)!=null) {
			return ResponseEntity.ok(labelSe.getLabel(id));
		}
		else {
			return ResponseEntity.badRequest().body("Not found label");
		}
	}
	@PostMapping("/newlabel")
	public ResponseEntity<?> saveLabel(@RequestBody labelDTO label){
		labelSe.saveLabel(label);
		return ResponseEntity.ok("Save success!");
		
	}
	@PutMapping("/updatelabel")
	public ResponseEntity<?> updateLabel(@RequestBody labelDTO label){
		labelSe.updateLabel(label);
		return ResponseEntity.ok("Update success!");
	}
	@DeleteMapping("/deletelabel/{id}")
	public ResponseEntity<?> deleteLabel(@PathVariable("id") Long id){
		labelSe.deleteLabel(id);
		return ResponseEntity.ok("Delete success!");
	}

}

package drowsiness.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import drowsiness.server.model.Label;
import drowsiness.server.repositories.LabelRepository;

@Service
public class LabelDAO {
	@Autowired
	LabelRepository repo;
	
	public List<Label> getLabels() {
		return repo.findAll();
	}
}

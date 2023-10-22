package drowsiness.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import drowsiness.server.model.SampleEyeState;
import drowsiness.server.repositories.SampleEyeStateRepository;

@Service
public class SampleEyeStateDAO {
	@Autowired
	SampleEyeStateRepository repo;
	
	public List<SampleEyeState> getSampleEyeStates() {
		return repo.findAll();
	}
	public SampleEyeState getSampleEyeStateById(int id) {
		return repo.findById(id).orElse(null);
	}
	public boolean AddNewSampleEyeState(SampleEyeState sp) {
		try {
			if (repo.findByName(sp.getName()) == null) {
				SampleEyeState sample = repo.save(sp);
				return sample != null;
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
		
	}

	public boolean updateSampleEyeState(SampleEyeState sp) {
		try {
			SampleEyeState sample = repo.save(sp);
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

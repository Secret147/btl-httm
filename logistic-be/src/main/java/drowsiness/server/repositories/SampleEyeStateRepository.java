package drowsiness.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import drowsiness.server.model.SampleEyeState;

public interface SampleEyeStateRepository extends JpaRepository<SampleEyeState, Integer>{
	@Query(value = "SELECT * FROM sample_eye_state s WHERE s.name = ?1",nativeQuery = true)
    public SampleEyeState findByName(String name);
	
	@Query(value = "DELETE FROM sample_eye_state s WHERE s.id = ?1",nativeQuery = true)
    public boolean findByName(int id);
}	

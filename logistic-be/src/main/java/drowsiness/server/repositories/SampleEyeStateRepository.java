package drowsiness.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import drowsiness.server.model.SampleEyeState;

public interface SampleEyeStateRepository extends JpaRepository<SampleEyeState, Integer>{

}

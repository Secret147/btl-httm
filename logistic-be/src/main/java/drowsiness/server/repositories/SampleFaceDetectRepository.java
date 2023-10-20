package drowsiness.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import drowsiness.server.model.SampleFaceDetect;

public interface SampleFaceDetectRepository extends JpaRepository<SampleFaceDetect, Integer>{

}

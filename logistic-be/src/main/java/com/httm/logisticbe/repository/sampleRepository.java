package com.httm.logisticbe.repository;

import java.util.List;
 

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import com.httm.logisticbe.entity.sampleEntity;

public interface sampleRepository extends JpaRepository<sampleEntity, Integer> {
     List<sampleEntity> findAllByLabel_Id(int id);
     @Query(value = "SELECT * FROM sample_eye_state s WHERE s.name = ?1",nativeQuery = true)
     public sampleEntity findByName(String name);
 	
 	@Query(value = "DELETE FROM sample_eye_state s WHERE s.id = ?1",nativeQuery = true)
     public boolean findByName(int id);
}

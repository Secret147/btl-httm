package drowsiness.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import drowsiness.server.model.Label;

public interface LabelRepository extends JpaRepository<Label, Integer>{

}

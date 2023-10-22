package drowsiness.server.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
@Table(name = "sample_face_detect")
public class SampleFaceDetect {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String size;
	private String extension;
	private boolean isTrain;
	private String urlImage;
	private String description;
	
	@OneToMany(mappedBy = "sampleFaceDetect",cascade = CascadeType.ALL)
	@JsonManagedReference
	private List<BoundingBox> boudingboxes = new ArrayList<>();
}

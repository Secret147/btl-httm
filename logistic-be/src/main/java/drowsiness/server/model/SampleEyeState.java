package drowsiness.server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "sample_eye_state")
public class SampleEyeState {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String size;
	private String extension;
	private boolean isTrain;
	private String urlImage;
	private String description;
	
	@ManyToOne
	@JoinColumn(name = "label_id",referencedColumnName = "id")
	private Label label;
}

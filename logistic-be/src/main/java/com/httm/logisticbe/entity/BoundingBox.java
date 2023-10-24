package com.httm.logisticbe.entity ;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Entity
@Data
public class BoundingBox {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private float top_left_x;
	private float top_left_y;
	private float width;
	private float height;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "sample_face_detect_id",referencedColumnName = "id")
	private SampleFaceDetect sampleFaceDetect;
	
}

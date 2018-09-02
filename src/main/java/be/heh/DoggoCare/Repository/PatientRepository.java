package be.heh.DoggoCare.Repository;

import be.heh.DoggoCare.Model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PatientRepository extends JpaRepository<Patient, Long> {

    List<Patient> findByName(@Param("name") String name);
    List<Patient> findByDogBreed(@Param("dogBreed") String dogBreed);
    List<Patient> findBySize(@Param("size") double size);
    List<Patient> findByWeight(@Param("weight") double weight);
    List<Patient> findByAge(@Param("age") int age);

}

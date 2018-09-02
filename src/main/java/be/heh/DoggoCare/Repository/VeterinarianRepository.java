package be.heh.DoggoCare.Repository;

import be.heh.DoggoCare.Model.Appointment;
import be.heh.DoggoCare.Model.Veterinarian;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VeterinarianRepository extends JpaRepository<Veterinarian, Long> {

    List<Veterinarian> findByFirstName(@Param("firstName") String firstName);
    List<Veterinarian> findByLastName(@Param("lastName") String lastName);
    List<Veterinarian> findByMail(@Param("mail") String mail);
    List<Veterinarian> findByAppointment(@Param("appointment")Appointment appointment);
}

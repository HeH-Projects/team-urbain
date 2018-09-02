package be.heh.DoggoCare.Repository;

import be.heh.DoggoCare.Model.Appointment;
import be.heh.DoggoCare.Model.Customer;
import be.heh.DoggoCare.Model.Patient;
import be.heh.DoggoCare.Model.Veterinarian;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByDate(@Param("date") LocalDate date);
    List<Appointment> findByPatient(@Param("patient") Patient patient);
    List<Appointment> findByCustomer(@Param("customer") Customer customer);
    List<Appointment> findByVeterinarian(@Param("veterinarian") Veterinarian veterinarian);
}

package be.heh.DoggoCare.Repository;

import be.heh.DoggoCare.Model.Appointment;
import be.heh.DoggoCare.Model.Customer;
import be.heh.DoggoCare.Model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    List<Customer> findByFirstName(@Param("firstName") String firstName);
    List<Customer> findByLastName(@Param("lastName") String lastName);
    List<Customer> findByMail(@Param("mail") String mail);
    List<Customer> findByPhone(@Param("phone") String phone);
    List<Customer> findByPatients(@Param("patients")Patient patient);
}

package be.heh.DoggoCare.Controllers;

import be.heh.DoggoCare.Model.Patient;
import be.heh.DoggoCare.Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/patients")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Patient> getAll(){
        List<Patient> list = new ArrayList<>();

        Iterable<Patient> patients = patientRepository.findAll();
        patients.forEach(list :: add);

        return list;
    }

    @PostMapping(value = "/add")
    public Patient create(@RequestBody Patient patient){
        return patientRepository.save(new Patient(patient.getName(), patient.getDogBreed(),
                patient.getSize(),patient.getWeight(),patient.getAge(),patient.getDescription(),
                patient.getCustomer()));
    }

    @PostMapping(value = "/update/{id}")
    public Patient update(@RequestBody Patient patient, @PathVariable Long id){
        Patient patientToUpdate = patientRepository.getOne(id);

        patientToUpdate.setName(patient.getName());
        patientToUpdate.setDogBreed(patient.getDogBreed());
        patientToUpdate.setSize(patient.getSize());
        patientToUpdate.setAge(patient.getAge());
        patientToUpdate.setDescription(patient.getDescription());
        patientToUpdate.setCustomer(patient.getCustomer());
        patientToUpdate.setAppointments(patient.getAppointments());

        return patientRepository.save(patientToUpdate);
    }

    @DeleteMapping(value = "/{id}")
    public void deletePatient(@PathVariable Long id){
        patientRepository.delete(patientRepository.getOne(id));
    }
}

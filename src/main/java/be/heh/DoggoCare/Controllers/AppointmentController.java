package be.heh.DoggoCare.Controllers;

import be.heh.DoggoCare.Model.Appointment;
import be.heh.DoggoCare.Repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Appointment> getAll(){
        List<Appointment> list = new ArrayList<>();

        Iterable<Appointment> appointments = appointmentRepository.findAll();
        appointments.forEach(list :: add);

        return list;
    }

    @PostMapping(value = "/add")
    public Appointment create(@RequestBody Appointment appointment){
        appointmentRepository.save(new Appointment(appointment.getDate(),appointment.getHour(),
                appointment.getPatient(),appointment.getCustomer(),appointment.getVeterinarian(),
                appointment.getCare(),appointment.getRoom()));
        return appointment;
    }

    @PostMapping(value = "/update/{id}")
    public Appointment update(@RequestBody Appointment appointment, @PathVariable Long id){
        Appointment appointmentToUpdate = appointmentRepository.getOne(id);

        appointmentToUpdate.setDate(appointment.getDate());
        appointmentToUpdate.setHour(appointment.getHour());
        appointmentToUpdate.setPatient(appointment.getPatient());
        appointmentToUpdate.setCustomer(appointment.getCustomer());
        appointmentToUpdate.setVeterinarian(appointment.getVeterinarian());
        appointmentToUpdate.setCare(appointment.getCare());
        appointmentToUpdate.setRoom(appointment.getRoom());

        return appointmentRepository.save(appointmentToUpdate);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteAppointment(@PathVariable Long id){
        appointmentRepository.delete(appointmentRepository.getOne(id));
    }

}

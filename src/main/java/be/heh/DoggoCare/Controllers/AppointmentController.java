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
    public Appointment addAppointment(@RequestBody Appointment appointment){
        appointmentRepository.save(new Appointment(appointment.getDate(),appointment.getHour(),
                appointment.getPatient(),appointment.getCustomer(),appointment.getVeterinarian(),
                appointment.getCare(),appointment.getRoom()));
        return appointment;
    }

}

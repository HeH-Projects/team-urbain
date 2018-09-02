package be.heh.DoggoCare.Controllers;

import be.heh.DoggoCare.Model.Veterinarian;
import be.heh.DoggoCare.Repository.VeterinarianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/veterinarians")
public class VeterinarianController {

    @Autowired
    private VeterinarianRepository veterinarianRepository;

    @GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Veterinarian> getAll(){
        List<Veterinarian> list = new ArrayList<>();

        Iterable<Veterinarian> veterinarians = veterinarianRepository.findAll();
        veterinarians.forEach(list :: add);

        return list;
    }

    @PostMapping(value = "/add")
    public Veterinarian create(@RequestBody Veterinarian veterinarian){
        return veterinarianRepository.save(new Veterinarian(veterinarian.getFirstName(), veterinarian.getLastName(),
                veterinarian.getMail(),veterinarian.getPhone()));
    }

    @PostMapping(value = "/update/{id}")
    public Veterinarian update(@RequestBody Veterinarian veterinarian, @PathVariable Long id){
        Veterinarian veterinarianToUpdate = veterinarianRepository.getOne(id);

        veterinarianToUpdate.setFirstName(veterinarian.getFirstName());
        veterinarianToUpdate.setLastName(veterinarian.getLastName());
        veterinarianToUpdate.setMail(veterinarian.getMail());
        veterinarianToUpdate.setPhone(veterinarian.getPhone());
        veterinarianToUpdate.setAppointments(veterinarian.getAppointments());

        return veterinarianRepository.save(veterinarianToUpdate);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteVeterinarian(@PathVariable Long id){
        veterinarianRepository.delete(veterinarianRepository.getOne(id));
    }
}

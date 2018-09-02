package be.heh.DoggoCare.Controllers;

import be.heh.DoggoCare.Model.Care;
import be.heh.DoggoCare.Repository.CareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/cares")
public class CareController {

    @Autowired
    private CareRepository careRepository;

    @GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Care> getAll(){
        List<Care> list = new ArrayList<>();

        Iterable<Care> cares = careRepository.findAll();
        cares.forEach(list :: add);

        return list;
    }

    @PostMapping(value = "/add")
    public Care create(@RequestBody Care care){
        return careRepository.save(new Care(care.getName(), care.getCost()));
    }

    @PostMapping(value = "/update/{id}")
    public Care update(@RequestBody Care care, @PathVariable Long id){
        Care careToUpdate = careRepository.getOne(id);

        careToUpdate.setName(care.getName());
        careToUpdate.setCost(care.getCost());

        return careRepository.save(careToUpdate);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteCare(@PathVariable Long id){
        careRepository.delete(careRepository.getOne(id));
    }
}

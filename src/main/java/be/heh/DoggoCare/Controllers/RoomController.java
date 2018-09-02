package be.heh.DoggoCare.Controllers;

import be.heh.DoggoCare.Model.Room;
import be.heh.DoggoCare.Repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/rooms")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Room> getAll(){
        List<Room> list = new ArrayList<>();

        Iterable<Room> rooms = roomRepository.findAll();
        rooms.forEach(list :: add);

        return list;
    }

    @PostMapping(value = "/add")
    public Room create(@RequestBody Room room){
        return roomRepository.save(new Room(room.getName()));
    }

    @PostMapping(value = "/update/{id}")
    public Room update(@RequestBody Room room, @PathVariable Long id){
        Room roomToUpdate = roomRepository.getOne(id);

        roomToUpdate.setName(room.getName());
        roomToUpdate.setAppointments(room.getAppointments());

        return roomRepository.save(roomToUpdate);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteRoom(@PathVariable Long id){
        roomRepository.delete(roomRepository.getOne(id));
    }
}

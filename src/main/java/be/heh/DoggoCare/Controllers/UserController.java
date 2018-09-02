package be.heh.DoggoCare.Controllers;

import be.heh.DoggoCare.Model.User;
import be.heh.DoggoCare.Repository.UserRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/users")
public class UserController {

    @Autowired
    private UserRepositoy userRepositoy;

    @GetMapping(value="/", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getAll(){
        List<User> list = new ArrayList<>();

        Iterable<User> users = userRepositoy.findAll();
        users.forEach(list :: add);
        return list;
    }

    @PostMapping(value = "/add")
    public User create(@RequestBody User user){
        userRepositoy.save(new User(user.getFirstName(), user.getLastName(), user.getMail(),
                user.getPassword()));
        return user;
    }

    @PostMapping(value = "/update/{id}")
    public User update(@RequestBody User user, @PathVariable Long id){
        User userToUpdate = userRepositoy.getOne(id);
        userToUpdate.setFirstName(user.getFirstName());
        userToUpdate.setLastName(user.getLastName());
        userToUpdate.setMail(user.getMail());
        userToUpdate.setPassword(user.getPassword());

        userRepositoy.save(userToUpdate);
        return userToUpdate;
    }

    @DeleteMapping(value = "/{id}")
    public void deleteUser(@PathVariable Long id){
        userRepositoy.delete(userRepositoy.getOne(id));
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getUserByLastName(@PathVariable Long id){
        List<User> users = userRepositoy.findByLastName(userRepositoy.getOne(id).getLastName());
        return users;
    }
}

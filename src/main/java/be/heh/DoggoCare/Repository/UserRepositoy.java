package be.heh.DoggoCare.Repository;

import be.heh.DoggoCare.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepositoy extends JpaRepository<User, Long> {

    List<User> findByUsername(@Param("username") String username);
    List<User> findByLastName(@Param("lastName") String lastName);
    List<User> findByMail(@Param("mail") String mail);

}

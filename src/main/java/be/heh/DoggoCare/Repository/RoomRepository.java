package be.heh.DoggoCare.Repository;

import be.heh.DoggoCare.Model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {

    List<Room> findByName(@Param("name") String name);
}

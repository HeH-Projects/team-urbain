package be.heh.DoggoCare.Repository;

import be.heh.DoggoCare.Model.Care;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CareRepository extends JpaRepository<Care, Long> {

    List<Care> findByName(@Param("name") String name);
    List<Care> findByCost(@Param("cost") double cost);
}

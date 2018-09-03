package be.heh.DoggoCare.Model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "care")
public class Care {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private String name;
    private double cost;
    private int duration;
    /*
        Visite de routine (45 min)
        Pédicure (30 min)
        Soin, toilettage (60 min)
    */
    public Care() {
    }

    public Care(String name, double cost, int duration) {
        this.name = name;
        this.cost = cost;
        this.duration=duration;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }
}

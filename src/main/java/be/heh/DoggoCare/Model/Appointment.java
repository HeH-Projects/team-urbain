package be.heh.DoggoCare.Model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    private LocalDate date;
    @NotNull
    private String hour;

    @ManyToOne
    private Patient patient;
    @ManyToOne
    private Customer customer;
    @ManyToOne
    private Veterinarian veterinarian;
    @ManyToOne
    private Care care;
    @ManyToOne
    private Room room;

    public Appointment() {
    }
    public Appointment(LocalDate date, String hour, Patient patient,
                       Customer customer, Veterinarian veterinarian,
                       Care care, Room room) {
        this.date = date;
        this.hour = hour;
        this.patient = patient;
        this.customer = customer;
        this.veterinarian = veterinarian;
        this.care = care;
        this.room = room;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getHour() {
        return hour;
    }

    public void setHour(String hour) {
        this.hour = hour;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Veterinarian getVeterinarian() {
        return veterinarian;
    }

    public void setVeterinarian(Veterinarian veterinarian) {
        this.veterinarian = veterinarian;
    }

    public Care getCare() {
        return care;
    }

    public void setCare(Care care) {
        this.care = care;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }
}

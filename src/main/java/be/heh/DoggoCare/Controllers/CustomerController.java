package be.heh.DoggoCare.Controllers;

import be.heh.DoggoCare.Model.Customer;
import be.heh.DoggoCare.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/customers")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Customer> getAll(){
        List<Customer> list = new ArrayList<>();

        Iterable<Customer> customers = customerRepository.findAll();
        customers.forEach(list :: add);

        return list;
    }

    @PostMapping(value = "/add")
    public Customer create(@RequestBody Customer customer){
        return customerRepository.save(new Customer(customer.getFirstName(), customer.getLastName(),
                customer.getMail(), customer.getPhone()));
    }

    @PostMapping(value = "/update/{id}")
    public Customer update(@RequestBody Customer customer, @PathVariable Long id){
        Customer customerToUpdate = customerRepository.getOne(id);

        customerToUpdate.setFirstName(customer.getFirstName());
        customerToUpdate.setLastName(customer.getLastName());
        customerToUpdate.setMail(customer.getMail());
        customerToUpdate.setPhone(customer.getPhone());
        customerToUpdate.setPatients(customer.getPatients());
        customerToUpdate.setAppointments(customer.getAppointments());

        return customerRepository.save(customerToUpdate);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteCustomer(@PathVariable Long id){
        customerRepository.delete(customerRepository.getOne(id));
    }
}

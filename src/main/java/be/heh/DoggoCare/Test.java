package be.heh.DoggoCare;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class Test {
    @RequestMapping("/")
    public String index() {
        return "Message de réussite !";
    }

    @RequestMapping("/test")
    public String testing() {
        return "Message de test !";
    }

}

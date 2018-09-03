package be.heh.DoggoCare.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping(value = "/")
    public String login(){
        return "index.html";
    }
}

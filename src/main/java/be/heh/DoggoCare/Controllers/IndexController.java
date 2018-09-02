package be.heh.DoggoCare.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {

    @GetMapping(value = "/")
    @ResponseBody
    public String index(){
        return "Bienvenue sur la page d'accueil !";
    }

}

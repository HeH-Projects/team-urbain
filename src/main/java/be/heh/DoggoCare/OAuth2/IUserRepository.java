package be.heh.DoggoCare.OAuth2;

import be.heh.DoggoCare.Model.User;

public interface IUserRepository {
    void save(User user);
    User getUserByName(String username);
}

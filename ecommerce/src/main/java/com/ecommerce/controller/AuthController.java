package com.ecommerce.controller;

import com.ecommerce.modal.User;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.response.SignupRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<User> createUserHandler(@RequestBody SignupRequest req){
        User user = new User();
        user.setEmail(req.getEmail());
        user.setFirstName(req.getFirstName());
        user.setLastName(req.getLastName());
        return new ResponseEntity<>(userRepository.save(user), HttpStatus.CREATED);

    }
}

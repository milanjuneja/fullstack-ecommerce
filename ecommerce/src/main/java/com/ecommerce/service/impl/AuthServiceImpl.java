package com.ecommerce.service.impl;

import com.ecommerce.config.JwtProvider;
import com.ecommerce.domain.USER_ROLE;
import com.ecommerce.modal.Cart;
import com.ecommerce.modal.User;
import com.ecommerce.repository.CartRepository;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.response.SignupRequest;
import com.ecommerce.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private  PasswordEncoder passwordEncoder;
    @Autowired
    private  CartRepository cartRepository;
    @Autowired
    private  JwtProvider jwtProvider;

    @Override
    public String createUser(SignupRequest request) {
        User user = userRepository.findByEmail(request.getEmail());

        if (user == null){
            User createdUser = new User();
            createdUser.setFirstName(request.getFirstName());
            createdUser.setLastName(request.getLastName());
            createdUser.setEmail(request.getEmail());
            createdUser.setRole(USER_ROLE.ROLE_CUSTOMER);
            createdUser.setMobile("9890890890");
            createdUser.setPassword(passwordEncoder.encode(request.getOtp()));

            user = userRepository.save(createdUser);
            Cart cart = new Cart();
            cart.setUser(user);
            cartRepository.save(cart);
        }
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(USER_ROLE.ROLE_CUSTOMER.toString()));

        Authentication authentication = new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                null,
                authorities);

        SecurityContextHolder.getContext().setAuthentication(authentication);

        return jwtProvider.generateToken(authentication);
    }
}

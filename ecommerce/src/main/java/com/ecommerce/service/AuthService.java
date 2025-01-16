package com.ecommerce.service;

import com.ecommerce.response.SignupRequest;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthService {
    String createUser(SignupRequest request) throws Exception;

    void sendLoginOtp(String email) throws Exception;
}

package com.ecommerce.service;

import com.ecommerce.response.AuthResponse;
import com.ecommerce.request.LoginRequest;
import com.ecommerce.request.SignupRequest;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthService {
    String createUser(SignupRequest request) throws Exception;

    void sendLoginOtp(String email) throws Exception;

    AuthResponse signIn(LoginRequest request);
}

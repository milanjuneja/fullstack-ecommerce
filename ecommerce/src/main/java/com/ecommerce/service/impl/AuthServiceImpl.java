package com.ecommerce.service.impl;

import com.ecommerce.config.JwtProvider;
import com.ecommerce.domain.USER_ROLE;
import com.ecommerce.modal.Cart;
import com.ecommerce.modal.User;
import com.ecommerce.modal.VerificationCode;
import com.ecommerce.repository.CartRepository;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.response.SignupRequest;
import com.ecommerce.response.VerificationCodeRepository;
import com.ecommerce.service.AuthService;
import com.ecommerce.service.EmailService;
import com.ecommerce.utils.OtpUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.parameters.P;
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

    @Autowired
    private VerificationCodeRepository verificationCodeRepository;

    @Autowired
    private EmailService emailService;
    @Override
    public String createUser(SignupRequest request) throws Exception {

        VerificationCode verificationCode = verificationCodeRepository.findByEmail(request.getEmail());

        if(verificationCode == null || !verificationCode.getOtp().equals(request.getOtp())){
            throw new Exception("wrong otp...");
        }

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

    @Override
    public void sendLoginOtp(String email) throws Exception {
        String SIGNING_PREFIX="signing_";
        if(email.startsWith(SIGNING_PREFIX)){
           email = email.substring(SIGNING_PREFIX.length());
           User user = userRepository.findByEmail(email);
           if(user == null){
               throw new Exception("user not exist with provided email");
           }
        }
        VerificationCode isExist = verificationCodeRepository.findByEmail(email);
        if(isExist != null){
            verificationCodeRepository.delete(isExist);
        }
        String otp = OtpUtil.generateOtp();

        VerificationCode verificationCode = new VerificationCode();
        verificationCode.setEmail(email);
        verificationCode.setOtp(otp);
        verificationCodeRepository.save(verificationCode);

        String subject = "Login/signup otp";
        String text = "your login/signup otp is - " + otp;
        emailService.sendVerificationOtpEmail(email, otp, subject, text);
    }
}

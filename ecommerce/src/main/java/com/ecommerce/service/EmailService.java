package com.ecommerce.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendVerificationOtpEmail(String userEmail, String otp, String subject, String text){
        try{
            MimeMessage mimeMsg = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMsg, "utf-8");
            mimeMessageHelper.setSubject(subject);
            mimeMessageHelper.setText(text);
            mimeMessageHelper.setTo(userEmail);
            javaMailSender.send(mimeMsg);

        }
        catch (MailException | MessagingException e){
            throw new MailSendException("Failed to send Email");
        }
    }



}

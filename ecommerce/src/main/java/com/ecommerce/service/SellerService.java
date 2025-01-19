package com.ecommerce.service;

import com.ecommerce.domain.AccountStatus;
import com.ecommerce.exception.SellerException;
import com.ecommerce.modal.Seller;
import org.hibernate.mapping.Selectable;

import java.util.List;

public interface SellerService {

    Seller getSellerProfileFromJwt(String jwt) throws Exception;
    Seller createSeller(Seller seller) throws Exception;
    Seller getSellerById(Long id) throws SellerException;
    Seller getSellerByEmail(String email) throws Exception;
    List<Seller> getAllSellers(AccountStatus status);

    Seller updateSeller(Long id, Seller seller) throws Exception;
    void deleteSeller(Long id) throws Exception;
    Seller verifyEmail(String email, String otp) throws Exception;

    Seller updateSellerAccountStatus(Long sellerId, AccountStatus status) throws Exception;



}

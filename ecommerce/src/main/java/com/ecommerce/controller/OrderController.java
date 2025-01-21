package com.ecommerce.controller;

import com.ecommerce.domain.PaymentMethod;
import com.ecommerce.modal.*;
import com.ecommerce.repository.PaymentOrderRepository;
import com.ecommerce.response.PaymentLinkResponse;
import com.ecommerce.service.*;
import com.razorpay.PaymentLink;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;
    @Autowired
    private UserService userService;
    @Autowired
    private CartService cartService;

    @Autowired
    private SellerService sellerService;

    @Autowired
    private SellerReportService sellerReportService;
    @Autowired
    private PaymentService paymentService;
    @Autowired
    private PaymentOrderRepository paymentOrderRepository;

    @PostMapping
    public ResponseEntity<PaymentLinkResponse> createOrder(
            @RequestHeader("Authorization") String jwt,
            @RequestBody Address shippingAddress,
            @RequestParam PaymentMethod paymentMethod
            ) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.findUserCart(user);
        Set<Order> orders = orderService.createOrder(user, shippingAddress, cart);
        PaymentOrder paymentOrder = paymentService.createOrder(user, orders);

        PaymentLinkResponse res = new PaymentLinkResponse();
        if(paymentMethod.equals(PaymentMethod.RAZORPAY)){
            PaymentLink paymentLink = paymentService.createRazorpayPaymentLink(
                user, paymentOrder.getAmount(), paymentOrder.getId()
            );

            String paymentUrl = paymentLink.get("short_url");
            String paymentUrlId = paymentLink.get("id");
            res.setPayment_link_id(paymentUrl);
            paymentOrder.setPaymentLinkId(paymentUrlId);
            paymentOrderRepository.save(paymentOrder);

        }
        else {
            String paymentUrl = paymentService.createStripePaymentLink(user,
                    paymentOrder.getAmount(),
                    paymentOrder.getId());

            res.setPayment_link_url(paymentUrl);
        }
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Order>> usersOrderHistory(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        return new ResponseEntity<>(orderService.usersOrderHistory(user.getId()), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long orderId,
                                              @RequestHeader("Authorization") String jwt) throws Exception {
        userService.findUserByJwtToken(jwt);
        return new ResponseEntity<>(orderService.findOrderById(orderId),  HttpStatus.ACCEPTED);
    }

    @GetMapping("item/{orderItemId}")
    public ResponseEntity<OrderItem> getOrderItemById(
            @PathVariable Long orderItemId,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        return new ResponseEntity<>(orderService.getOrderItemById(orderItemId), HttpStatus.ACCEPTED);

    }

    @PutMapping("/cancel/{orderId}")
    public ResponseEntity<Order> cancelOrder(
        @PathVariable Long orderId,
        @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Order order = orderService.cancelOrder(orderId, user);

        Seller seller = sellerService.getSellerById(order.getSellerId());
        SellerReport report = sellerReportService.getSellerReport(seller);

        report.setCanceledOrders(report.getCanceledOrders()+1);
        report.setTotalRefunds(report.getTotalRefunds() + order.getTotalSellingPrice());
        sellerReportService.updateSellerReport(report);

        return ResponseEntity.ok(order);
    }

}

import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import AddressCard from "./AddressCard";
import React, { useState } from "react";
import AddressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";

const paymentGatewayList = [
  {
    value: "RAZORPAY",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzHTRfO-BS6NfMWXr8zbb3d-pcOCPNgJX9A&s",
    label: "",
  },
  {
    value: "STRIPE",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRek2EqBo5YIE0TPMVMlIFA594WZZeuqYdAQQ&s",
    label: "",
  },
];

const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [paymentGateway, setPaymentGateway] = useState("RAZORPAY");

  const handlePaymentChange = (event:any) => {
    setPaymentGateway(event.target.value);
  }
  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Select Address</h1>
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
            <div className="text-xs font-medium space-y-5">
              <p>Saved Addresses</p>
              <div className="space-y-3">
                {[1, 1, 1].map(() => (
                  <AddressCard />
                ))}
              </div>
            </div>

            <div className="py-4 px-5 rounded-md border">
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
          </div>
          <div>
            <div>
              <div className="space-y-3 border p-5 rounded-md">
                <h1 className="text-primary-color font-medium pb-2 text-center">Chose Payment Gateway</h1>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="flex justify-between pr-0"
                  onChange={handlePaymentChange}
                  value={paymentGateway}
                >
                  {paymentGatewayList.map((item) => (
                    <FormControlLabel
                      className="border w-[45%] pr-2 rounded-md flex justify-center"
                      value={item.value}
                      control={<Radio />}
                      label={
                        <img
                          className={`${
                            item.value == "stripe" ? "w-14" : ""
                          } object-cover`}
                          src={item.image}
                          alt={item.label}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="border rounded-md">
              <PricingCard />
              <div className="p-5">
                <Button fullWidth sx={{ py: "11px" }} variant="contained">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm />
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;

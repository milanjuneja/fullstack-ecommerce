import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import store, { useAppDispatch, useAppSelector } from "../../../State/Store";
import { getAllSellers } from "../../../State/seller/sellerSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const accountStat = [
  {
    status: "PENDING_VERIFICATION",
    title: "Pending Verification",
    description: "Account is pending for verification",
  },
  {
    status: "ACTIVE",
    title: "Active",
    description: "Account is pending for verification",
  },
  {
    status: "SUSPENDED",
    title: "Suspended",
    description: "Account is pending for verification",
  },
  {
    status: "DEACTIVATED",
    title: "Deactivated",
    description: "Account is pending for verification",
  },
  {
    status: "BANNED",
    title: "Banned",
    description: "Account is pending for verification",
  },
  {
    status: "CLOSED",
    title: "Closed",
    description: "Account is pending for verification",
  },
];

const SellerTable = () => {
  const [accountStatus, setAccountStatus] = useState("PENDING_VERIFICATION");
  const dispatch = useAppDispatch();
  const { seller } = useAppSelector((store) => store);
  useEffect(() => {
    dispatch(getAllSellers(accountStatus));
  }, [accountStatus]);
  const handleChange = (event: any) => {
    setAccountStatus(event.target.value);
  };
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl text-primary-color rounded-md mb-4">
          Seller Details
        </h1>
      </div>
      <div className="pb-5 w-60">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Account Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={accountStatus}
            label="Account Status"
            onChange={handleChange}
          >
            {accountStat.map((item) => (
              <MenuItem value={item.status}>{item.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Seller Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell align="right">Mobile</StyledTableCell>
              <StyledTableCell align="right">GSTIN</StyledTableCell>
              <StyledTableCell align="right">Business Name</StyledTableCell>
              <StyledTableCell align="right">Account Status</StyledTableCell>
              <StyledTableCell align="right">Change Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {seller.sellers.map((seller) => (
              <StyledTableRow key={seller.id}>
                <StyledTableCell component="th" scope="row">
                  {seller.sellerName}
                </StyledTableCell>
                <StyledTableCell>{seller.email}</StyledTableCell>
                <StyledTableCell align="right">{seller.mobile}</StyledTableCell>
                <StyledTableCell align="right">{seller.GSTIN}</StyledTableCell>
                <StyledTableCell align="right">
                  {seller.businessDetails.businessName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {seller.accountStatus}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button>Change Status</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SellerTable;

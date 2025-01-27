import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { validateDate } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import React from "react";

const CreateDealForm = () => {
  const formik = useFormik({
    initialValues: {
      discount: 0,
      category: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Box
      className="space-y-6"
      component={"form"}
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h4" className="text-center">
        Create Deal
      </Typography>
      <TextField
        fullWidth
        name="discount"
        label="Discount"
        value={formik.values.discount}
        onChange={formik.handleChange}
        error={formik.touched.discount && Boolean(formik.errors.discount)}
        helperText={formik.touched.discount && formik.errors.discount}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.values.category}
          label="Category"
          onChange={formik.handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
      <Button fullWidth sx={{py:'.9rem'}} type="submit" variant="contained">Create Deal</Button>
    </Box>
  );
};

export default CreateDealForm;

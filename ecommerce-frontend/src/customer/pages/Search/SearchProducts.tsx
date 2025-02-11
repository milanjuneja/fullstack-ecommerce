import { Box, Divider, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useSearchParams } from "react-router-dom";
import store, { useAppDispatch, useAppSelector } from "../../../State/Store";
import { searchProduct } from "../../../State/customer/ProductSlice";
import ProductCard from "../Product/ProductCard";

const SearchProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((store) => store);
  const formik = useFormik({
    initialValues: {
      search: searchParams.get("search") || "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(searchProduct(values.search));
    },
  });

  const updateFilterParams = (event: any) => {
    const { value, name } = event.target;
    formik.handleChange(event);
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set(name, value);
    else newParams.delete(name);
    setSearchParams(newParams);
    console.log(newParams);
  };

  return (
    <>
      <div className="mb-5">
        <Box
          className="space-y-6 lg:w-1/2 w-full mx-auto"
          component={"form"}
          onSubmit={formik.handleSubmit}
        >
          <Typography
            sx={{ paddingTop: "10px" }}
            variant="h4"
            className="text-center"
          >
            Search Products
          </Typography>
          <TextField
            fullWidth
            name="search"
            label="Search Products"
            value={formik.values.search}
            onChange={(e) => updateFilterParams(e)}
            error={formik.touched.search && Boolean(formik.errors.search)}
            helperText={formik.touched.search && formik.errors.search}
            required
          />
        </Box>
      </div>
      {product.searchProduct.length > 0 ? <div className="pt-5">
        <section className="product_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5">
          {product.searchProduct.map((item) => (
            <ProductCard item={item} />
          ))}
        </section>
      </div> : 
      <div className="text-center "> <h1>No Product found</h1>
        </div>}
    </>
  );
};

export default SearchProducts;

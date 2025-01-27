import React, { useState } from "react";
import StartIcon from "@mui/icons-material/Star";
import { teal } from "@mui/material/colors";
import { Button, Divider } from "@mui/material";
import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import SimilarProduct from "./SimilarProduct";
import Review from "../Review/Review";
import ReviewCard from "../Review/ReviewCard";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[20%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src="https://assets.ajio.com/medias/sys_master/root/20230629/nDDs/649cd4e8a9b42d15c91c7cc3/-473Wx593H-466021226-black-MODEL.jpg"
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w=[85%]">
            <img
              className="w-full rounded-md"
              src="https://assets.ajio.com/medias/sys_master/root/20230629/nDDs/649cd4e8a9b42d15c91c7cc3/-473Wx593H-466021226-black-MODEL.jpg"
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-lg text-primary-color">Ram Clothing</h1>
          <p className="text-gray-500 font-semibold">Men black shirt</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StartIcon sx={{ color: teal[500], fontSize: "17px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>2454 Ratings</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">₹ 400</span>
              <span className="line-through text-gray-400">₹ 999</span>
              <span className="text-primary-color font-semibold">60%</span>
            </div>
            <p className="text-sm mt-3">
              Inclusive of all taxes. Free Shipping above Rs 1500
            </p>
          </div>
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic & Quality Assured</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back guarantee</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free shipping and return</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: teal[500] }} />
              <p>Pay on Delivery available</p>
            </div>
          </div>
          <div className="mt-7 space-y-2">
            <h1>Quantity</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button
                disabled={quantity == 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
              variant="contained"
              color="primary"
            >
              Add To Cart
            </Button>

            <Button
              fullWidth
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
              variant="outlined"
              color="primary"
            >
              Wishlist
            </Button>
          </div>

          <div className="mt-5">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              accusamus enim minima minus rem aliquam optio, facilis totam illum
              nobis fugiat esse magnam, veritatis ex vel consequatur voluptatem
              ad! Nesciunt.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>

      <div className="mt-20">
        <h1 className="text-lg font-bold">Similar Product</h1>
        <div className="pt-5"><SimilarProduct /></div>
        
      </div>

    </div>
  );
};

export default ProductDetail;

import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const images = [
  "https://veirdo.in/cdn/shop/files/Artboard8.png?v=1724158576",
  "https://assets.ajio.com/medias/sys_master/root/20230629/nDDs/649cd4e8a9b42d15c91c7cc3/-473Wx593H-466021226-black-MODEL.jpg",
];

const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <>
      <div className="group relative px-4">
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((image, index) => (
            <img
              className="card-media object-top"
              src={image}
              alt=""
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}

          {isHovered && (
            <div className="indicator flex flex-col items-center space-y-2">
              <div className="flex gap-3">
                <Button variant="contained" color="secondary">
                  <Favorite sx={{ color: teal[500] }} />
                </Button>

                <Button variant="contained" color="secondary">
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>
              </div>
            </div>
          )}

         
          </div>
          <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
            <div className="name">
              <h1>Nike</h1>
              <p>Blue shirt</p>
            </div>
            <div className="price flex items-center gap-3">
              <span className="font-sans text-gray-800">
              ₹ 400
              </span>
              <span className="thin-line-through text-gray-400">₹ 999</span>
              <span className="text-primary-color font-semibold">60%</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

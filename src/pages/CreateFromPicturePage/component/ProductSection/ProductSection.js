import "./ProductSection.css";
import React, { useEffect, useRef } from "react";
import shirtBase from "../../../../assets/images/shirt-base.png";

import QuantityList from "./QuantityList";
import SizeList from "./SizeList";
import AddCartBtn from "./AddCartBtn";

const ProductSection = (props) => {
  const { currentChoose, pictureProductState, setPictureProductState } =
    props.props;

  // canvas
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // base imgage
    const shirtBaseImage = new Image();
    shirtBaseImage.src = shirtBase;

    // draw base image
    shirtBaseImage.onload = () => {
      context.drawImage(shirtBaseImage, 0, 50, 300, 300);

      // draw search image
      if (currentChoose !== null) {
        const currentChooseImage = new Image();
        currentChooseImage.crossOrigin = "anonymous";
        currentChooseImage.src = currentChoose;
        currentChooseImage.onload = () => {
          // keep ratio
          const aspectRatio =
            currentChooseImage.width / currentChooseImage.height;

          //X: 85 ~ 215, width = 130
          //Y: 100 ~ 330, height = 230, middle = 215
          var width = 130;
          var height = width / aspectRatio;
          var drawX = 85;
          var drawY = 215 - height / 2;

          // draw
          context.drawImage(currentChooseImage, drawX, drawY, width, height);

          // url (save to firestore)
          const imgUrl = canvas.toDataURL();
          setPictureProductState({
            ...pictureProductState,
            img: imgUrl,
          });
        };
      }
    };
  }, [currentChoose]);

  return (
    <div className="productSection">
      <canvas
        ref={canvasRef}
        width={300}
        height={400}
        style={{ backgroundColor: "rgb(238, 238, 238)" }}
      />
      <h2 style={{ color: "#ac2432" }}>$20.00</h2>
      <QuantityList />
      <SizeList />
      <AddCartBtn />
    </div>
  );
};

export default ProductSection;

import React from "react";
import classNames from "classnames";
import defaultImage from "../../assets/noimage.jpg";
import "./Image.css";

const Image = ({ className, ...props }) => (
  <img
    className={classNames("photo", className)}
    src={defaultImage}
    alt=""
    {...props}
  />
);

export default Image;

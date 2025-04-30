"use client"
import React from "react";
import { Oval } from "react-loader-spinner";

type LoadingProps = {
  height?: string;
  width?: string;
  primaryColor?: string;
  secondaryColor?: string;
  black?:boolean
};

const Loading = ({
  height,
  width,
  primaryColor,
  secondaryColor,
  black
}: LoadingProps) => {
  return (
    <Oval
      height={height || 20}
      width={width || 20}
      color={primaryColor ? primaryColor : black ? "black" : "#fff"}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={secondaryColor ? secondaryColor : black ? "black" : "#fff"}
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loading;

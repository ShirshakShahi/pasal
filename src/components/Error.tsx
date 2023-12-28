import { Typography } from "antd";
import React from "react";

const Error: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-1/2">
      <Typography.Title>OOPS! Something Went Wrong!!!</Typography.Title>
    </div>
  );
};

export default Error;

import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React from "react";

const Cart: React.FC = () => {
  return (
    <>
      <Badge className="text-xl flex w-8 justify-center" count={30}>
        <ShoppingCartOutlined className="w-12 flex bg-red-300" />
      </Badge>
    </>
  );
};

export default Cart;

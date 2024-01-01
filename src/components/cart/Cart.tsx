import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Drawer } from "antd";
import React, { useState } from "react";

const Cart: React.FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Badge
        className=" text-[25px] cursor-pointer mt-2"
        size="small"
        count={5}
      >
        <ShoppingCartOutlined onClick={() => setDrawerIsOpen(true)} />
      </Badge>
      <Drawer
        visible={drawerIsOpen}
        onClose={() => setDrawerIsOpen(false)}
      >
        
      </Drawer>
    </div>
  );
};

export default Cart;

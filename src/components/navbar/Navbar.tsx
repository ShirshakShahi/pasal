import { HomeFilled } from "@ant-design/icons";
import { Menu } from "antd";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesConstant } from "../../constants/routes_config";
import Cart from "../cart/Cart";

interface ItemInterface {
  label?: string | ReactNode;
  icon?: ReactNode;
  key: string;
  children?: ItemInterface[];
}

const Navbar: FC = () => {
  const navigate = useNavigate();

  const items: ItemInterface[] = [
    {
      icon: <HomeFilled />,
      key: "",
    },
    {
      label: "Men",
      key: "men",
      children: [
        {
          label: "Men's Shoes",
          key: "mens-shoes",
        },
        {
          label: "Men's Watches",
          key: "mens-watches",
        },
      ],
    },
    {
      label: "Women",
      key: "women",
      children: [
        {
          label: "Women's Clothing",
          key: "womens-dresses",
        },
        {
          label: "Women's Shoes",
          key: "womens-shoes",
        },
        {
          label: "Women's Jewellery",
          key: "womens-jewellery",
        },
        {
          label: "Women's Watches",
          key: "womens-watches",
        },
        {
          label: "Women's Bags",
          key: "womens-bags",
        },
      ],
    },
  ];

  return (
    <div className=" w-[99%] flex justify-center ">
      <Menu
        onClick={(item) => {
          if (item.key === "") {
            navigate(`${RoutesConstant.HOME}`);
          } else {
            navigate(`${RoutesConstant.CATEGORY}/${item.key}`);
          }
        }}
        className="w-full bg-inherit text-slate-900"
        items={items}
        mode="horizontal"
      />
      <Cart />
    </div>
  );
};

export default Navbar;

import { HomeFilled } from "@ant-design/icons";
import { Menu } from "antd";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesConstant } from "../../constants/routes_config";

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
          label: "Men's Clothing",
          key: "mens-clothing",
        },
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
          label: "Women's Jewelry",
          key: "womens-jewelry",
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
    <div className="bg-ecf0f1  flex justify-center">
      <Menu
        onClick={(item) => {
          console.log(item.key);
          if (item.key === "") {
            navigate(`${RoutesConstant.HOME}`);
          } else {
            navigate(`${RoutesConstant.PRODUCT}/${item.key}`);
          }
        }}
        className="w-full bg-inherit text-slate-900"
        items={items}
        mode="horizontal"
      />
    </div>
  );
};

export default Navbar;

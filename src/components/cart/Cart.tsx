import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Modal, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/actions/cartActions";
import { cartStateInterface } from "../../redux/reducers/cartReducers";
import Error from "../Error";
import Spinner from "../Spinner";

const Cart: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {
    cartItems = { products: [], totalQuantity: 0, totalProducts: 0 },
    error,
    isLoading,
  } = useSelector((state: { carts: cartStateInterface }) => state.carts);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value: any) => {
        return <span>${value}</span>;
      },
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
  ];

  if (isLoading) {
    return <Spinner />;
  }

  return error ? (
    <Error />
  ) : (
    <div>
      <Badge
        className=" text-[25px] cursor-pointer mt-2"
        size="small"
        count={cartItems?.products?.length}
      >
        <ShoppingCartOutlined onClick={() => setIsModalOpen(true)} />
      </Badge>
      <Modal
        title={
          <Typography.Title className="text-center">
            {`Your Cart (${cartItems?.products.length} items)`}
          </Typography.Title>
        }
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={handleCancel}
        centered
        width={1000}
        footer={(_, { CancelBtn }) => (
          <>
            <CancelBtn />
            <Button>OK</Button>
          </>
        )}
      >
        <Table
          pagination={false}
          columns={columns}
          dataSource={cartItems?.products.map((item: any) => ({
            ...item,
            key: item.id,
          }))}
          footer={(data) => {
            const total = data.reduce((pre: any, current: any) => {
              return pre + current.total;
            }, 0);
            return <div>Total: ${total}</div>;
          }}
        />
      </Modal>
    </div>
  );
};

export default Cart;

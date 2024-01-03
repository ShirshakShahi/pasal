import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, InputNumber, Modal, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, updateCartQuantity } from "../../redux/actions/cartActions";
import { cartStateInterface } from "../../redux/reducers/cartReducers";
import Error from "../Error";

const Cart: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {
    cartItems = { products: [], totalQuantity: 0, totalProducts: 0 },
    error,
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
      render: (value: any, record: any) => (
        <InputNumber
          min={0}
          defaultValue={value}
          step={1}
          onChange={(qty) => {
            dispatch(updateCartQuantity(record.id, qty, record.price));
          }}
        ></InputNumber>
      ),
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (_: any, record: any) => {
        // Calculate total dynamically based on quantity and price
        return `$${record.quantity * record.price}`;
      },
    },
  ];

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
            {`Your Cart (${cartItems?.products?.length} items)`}
          </Typography.Title>
        }
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={handleCancel}
        centered
        width={1000}
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
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
          dataSource={cartItems?.products?.map((item: any) => ({
            ...item,
            key: item.id,
            total: item.quantity * item.price, // Ca
          }))}
          footer={(data) => {
            const total = data.reduce((pre: any, current: any) => {
              return pre + current.total;
            }, 0);
            return (
              <div>
                <strong>Grand Total : </strong>${total}
              </div>
            );
          }}
        />
      </Modal>
    </div>
  );
};

export default Cart;

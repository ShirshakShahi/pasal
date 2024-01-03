import React from "react";
import { CarryOutFilled } from "@ant-design/icons";
import { IProducts } from "../../commonInterfaces";
import { Badge, Card, Image, List, Typography } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

interface ProductItemProps {
  products: IProducts[];
}

const ProductItem: React.FC<ProductItemProps> = ({ products }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (id: number) => {
    console.log("id innnnnnnnn handlerrrrrrrrrrrrrrr", id);
    dispatch(addToCart(id));
  };

  return (
    <List
      grid={{ column: 3 }}
      className="bg-ecf0f1"
      dataSource={Array.isArray(products) ? products : []}
      renderItem={(product: IProducts, index: number) => {
        return (
          <Badge.Ribbon
            // className="mr-[6rem] w-auto"
            className="bg-ecf0f1 flex mr-[6rem] w-auto"
            color="red"
            text={`${product.discountPercentage}`}
            key={product.id}
          >
            <Card
              title={product.title}
              key={index}
              id={`${product.id}`}
              className="w-[25rem] m-4 h-[30rem"
              cover={
                <Image
                  className="itemCardImage h-12"
                  src={`${product.thumbnail}`}
                  alt={`${product.title}`}
                />
              }
              bordered
              actions={[
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() => addToCartHandler(product.id)}
                >
                  {" "}
                  <CarryOutFilled /> Add to cart
                </button>,
              ]}
            >
              <Card.Meta
                title={
                  <Typography.Paragraph>
                    <Typography.Text>Price :${product.price}</Typography.Text>
                    <Typography.Text delete type="danger">
                      {"   "}${product.discountPercentage}
                    </Typography.Text>
                  </Typography.Paragraph>
                }
                description={
                  <Typography.Paragraph
                    ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                  >
                    {" "}
                    {product.description}
                  </Typography.Paragraph>
                }
              ></Card.Meta>
            </Card>
          </Badge.Ribbon>
        );
      }}
    />
  );
};

export default ProductItem;

import { Badge, Card, Image, List, Typography } from "antd";
import { IProducts } from "../../commonInterfaces";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productActions";
import { productStateInterface } from "../../redux/reducers/productReducers";
import Spinner from "../Spinner";
import { CarryOutFilled } from "@ant-design/icons";

const ProductListing = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector(
    (state: { products: productStateInterface }) => state.products
  );
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (error) {
    return <p>Something went Wrong</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
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
              className="w-[25rem] m-4 h-[30rem"
              cover={
                <Image
                  className="itemCardImage h-12"
                  src={`${product.thumbnail}`}
                  alt="random pic"
                />
              }
              bordered
              actions={[
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
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
                      {"   "}
                      ${product.discountPercentage}
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

export default ProductListing;

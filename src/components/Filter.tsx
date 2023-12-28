import { FC, useEffect } from "react";
import { getProductsByCategory } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productStateInterface } from "../redux/reducers/productReducers";
import Spinner from "./Spinner";
import ProductItem from "./product/ProductItem";
import Error from "./Error";

const Filter: FC = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  const { products, isLoading, error } = useSelector(
    (state: { products: productStateInterface }) => state.products
  );

  if (error) {
    return <Error />;
  }

  useEffect(() => {
    dispatch(getProductsByCategory(category));
  }, [category]);

  return isLoading ? <Spinner /> : <ProductItem products={products} />;
};

export default Filter;

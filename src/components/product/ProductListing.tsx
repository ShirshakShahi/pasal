import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productActions";
import { productStateInterface } from "../../redux/reducers/productReducers";
import Spinner from "../Spinner";
import ProductItem from "./ProductItem";
import Error from "../Error";

const ProductListing = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector(
    (state: { products: productStateInterface }) => state.products
  );
  useEffect(() => {
    // Check if products are already available in the store
    if (!products.length) {
      dispatch(getAllProducts());
    }
  }, [dispatch, products]);

  if (error) {
    return <Error />;
  }
  return isLoading ? <Spinner /> : <ProductItem products={products} />;
};

export default ProductListing;

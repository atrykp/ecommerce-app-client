import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import { RootState } from "../store";

export interface ProductItem {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: RootState) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((prod) => (
            <Col key={prod.name} sm={12} md={6} lg={4} xl={3}>
              <Product product={prod} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;

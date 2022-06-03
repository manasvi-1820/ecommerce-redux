import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { addCart, delCart } from "../redux/action";

const Cart = () => {
  const { id } = useParams();
  // const history = useNavigate();
  const [data, setData] = useState([]);

  const getData = useSelector((state) => state.cartReducer.cart);

  const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setData(await response.json());
    console.log("response.json() ==>", response.json());
    console.log("getData", getData);
    console.log("data", data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const dispatch = useDispatch();
  const dlt = (id) => {
    console.log("delete", id);
    dispatch(delCart(id));
    // history("/");
  };

  const add = (product) => {
    console.log("add", product);
    dispatch(addCart(product));
    // history("/");
  };

  return (
    <div className="container my-2 py-5">
      <div className="row">
        <h2 className="text-center">Cart</h2>
        {getData.map((element) => {
          console.log("element", element);
          return (
            <>
              <div className="col-md-6 my-5">
                <img
                  src={element.image}
                  alt={element.title}
                  height="200px"
                  width="180px"
                />
              </div>

              <div className="col-md-6 my-5">
                <h3>{element.title}</h3>
                {/* <h5 className="mt-4 mb-4">Quantity:{element.qty}</h5> */}
                <p className="lead fw-bold">
                  {/* {element.qty} * ${element.price} = $
                  {element.qty * element.price} */}
                  Price: ${element.price}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => dlt(element.id)}
                >
                  <i className="fa fa-trash"></i>
                </button>
                {/* <button
                  className="btn btn-outline-dark"
                  onClick={() => add(element)}
                >
                  <i className="fa fa-plus"></i>
                </button> */}
              </div>
            </>
          );
        })}
        {/* <button className="my-5 py-2">Proceed to Checkout</button> */}
      </div>
    </div>
  );
};

export default Cart;

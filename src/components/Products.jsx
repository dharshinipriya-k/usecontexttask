import React, { useContext } from "react";
import { ProductContext } from "../utils/ProductContextComponent";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function Products() {
  let { user, setUser } = useContext(ProductContext);

  const handleDecrement = (id, quantity) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const handleIncrement = (id, quantity) => {
    if (quantity < 10) {
      updateQuantity(id, quantity + 1);
    }
  };

  const handleDelete = (id) => {
    setUser((prevUser) => ({
      ...prevUser,
      products: prevUser.products.filter((product) => product.id !== id),
    }));
  };

  const updateQuantity = (id, newQuantity) => {
    setUser((prevUser) => ({
      ...prevUser,
      products: prevUser.products.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      ),
    }));
  };

  const totalCartQuantity = user.products.reduce(
    (total, product) => total + (product.quantity || 1),
    0
  );
  const totalPrice = user.products.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );
  return (
    <>
      <div className="wrapper">
        <div className="head">
          <div className="bg-dark rounded-4 text-center ">
            <h3>ContextAPICart</h3>
            <br />
            {/* <Button variant="light" className='cart-btn'>Cart<i className="fa-solid fa-cart-shopping"></i>:{cart}</Button> */}
            <br />
            <div className="total-items">
              <h4>Total Quantity: {totalCartQuantity}</h4>
            </div>
            <div className="total-amount">
              <h4>Total Amount: ${totalPrice}</h4>
            </div>
          </div>
        </div>

        {user.products.map((product) => {
          const discountPrice = Math.round(
            product.price * (product.discountPercentage / 100)
          );
          const total = product.price * (product.quantity || 1);

          return (
            <div className="card" key={product.id}>
              <div className="col">
                <div className="card h-100">
                  <Carousel>
                    {/* Thumbnail */}
                    <Carousel.Item className="carousel-image">
                      <img src={product.thumbnail} alt="" />
                    </Carousel.Item>
                    {/* First Image */}
                    <Carousel.Item className="carousel-image">
                      <img src={product.images} alt="" />
                    </Carousel.Item>
                  </Carousel>
                  <div className="card-body">
                    <h2 className="card-title">{product.title}</h2>
                    <p className="card-text">{product.description}</p>
                    <p className="brand">
                      Brand: <b>{product.brand}</b>
                    </p>
                    <p className="category">
                      Category: <b>{product.category}</b>
                    </p>
                    <h3 className="price">
                      <mark>$ {product.price}</mark>
                    </h3>
                    <h5 className="discount">Discount : -${discountPrice}</h5>
                    <p style={{ textAlign: "center" }}>
                      Rating: {product.rating}
                    </p>
                    <p id="blink">Stock Left: {product.stock}</p>
                  </div>
                  <div className="card-footer">
                    <div className="quantity-select-minus">
                      {/* {(count===0)?<Button variant="outline-secondary" onClick={()=>handleDecrement(product.id,product.quantity || 1)} disabled>-</Button>: */}
                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          handleDecrement(product.id, product.quantity || 1)
                        }
                      >
                        -
                      </Button>
                    </div>

                    <div className="quantity">{product.quantity || 1}</div>

                    <div className="quantity-select-minus">
                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          handleIncrement(product.id, product.quantity || 1)
                        }
                      >
                        +
                      </Button>
                    </div>

                    <div className="row">
                      <div>
                        <b>Price: ${total}</b>
                      </div>
                    </div>

                    <div className="add-to-cart">
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => handleDelete(product.id)}
                      >
                        Remove from cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;

import React from "react";
import Products from "./components/Products";
import ProductContextComponent from "./utils/ProductContextComponent";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <ProductContextComponent>
        <Products />
      </ProductContextComponent>
    </>
  );
}

export default App;

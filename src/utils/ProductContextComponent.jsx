import React, { useState } from "react";
export const ProductContext = React.createContext();

function ProductContextComponent({ children }) {
  let [user, setUser] = useState({
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "Smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/2020-iPhone-SE-2-Frosted-Glass.jpeg?size=690:388",
      },
      {
        id: 2,
        title: "iPhone X",
        description: "Model A19211 6.5-inch Super Retina HD display ",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "Smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: "https://i.dummyjson.com/data/products/1/2.jpg",
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "Smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images:
          "https://i.pcmag.com/imagery/lineupitems/06XOoNmfVNq3SjmByeNZxnz.fit_lim.size_1050x578.v1581384840.jpg",
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "Smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: "https://i.dummyjson.com/data/products/4/1.jpg",
      },
      {
        id: 5,
        title: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition ",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "Smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: "https://i.dummyjson.com/data/products/5/1.jpg",
      },
    ],
  });
  return (
    <>
      <ProductContext.Provider value={{ user, setUser }}>
        {children}
      </ProductContext.Provider>
    </>
  );
}

export default ProductContextComponent;

import React from "react";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

const img2 =
  "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/n/w/t/6-brd-406-brd-466-6-birde-grey-orange-green-original-imag5ccyzzwrwwfh.jpeg?q=70&crop=true";

const img3 =
  "https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_large.jpg";

const Home = () => {
  const ProductList = [
    {
      name: "Mac Book",
      price: 120000,
      imgSrc: img1,
      id: "sdcnxlxiow",
    },
    {
      name: "Black Shoe",
      price: 500,
      imgSrc: img2,
      id: "hbcnjncjkn",
    },
    {
      name: "iPhone 15 Pro",
      price: 134900,
      imgSrc: img3,
      id: "ybdsbcha",
    },
  ];

  const addToCartHandler = (options) => {
    console.log(options);
  };

  return (
    <div className="home">
      {ProductList.map((item) => (
        <ProductCard
          key={item.id}
          imgSrc={item.imgSrc}
          name={item.name}
          price={item.price}
          id={item.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button
      onClick={(name) => handler({ name, price, id, quantity: 1, imgSrc })}
    >
      Add to Cart
    </button>
  </div>
);

export default Home;

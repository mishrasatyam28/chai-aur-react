import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

const img2 =
  "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/n/w/t/6-brd-406-brd-466-6-birde-grey-orange-green-original-imag5ccyzzwrwwfh.jpeg?q=70&crop=true";

const img3 =
  "https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_large.jpg";

const img4 =
  "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/j/t/c/-original-imaghbdup9jbrdzh.jpeg?q=70&crop=false";

const img5 =
  "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/q/m/q/-original-imaghxg9cwddrghx.jpeg?q=70&crop=false";

const img6 =
  "https://m.media-amazon.com/images/I/31qx8K0wm+L._AC_SR400,600_.jpg";

const img7 = "https://m.media-amazon.com/images/I/61l9ppRIiqL._SX679_.jpg";

const img8 = "https://m.media-amazon.com/images/I/41-sMr98oCL._SY500_.jpg";

const img9 = "https://m.media-amazon.com/images/I/71TAqmTQiuL._SX679_.jpg";

const img10 =
  "https://th.bing.com/th?id=OPA.MefWAW99VMqIDA474C474&w=592&h=550&o=5&dpr=1.1&pid=21.1";

const Home = () => {
  const ProductList = [
    {
      name: "Mac Book",
      price: 120000,
      imgSrc: img1,
      id: "sdcnxlxiow",
    },
    {
      name: "White Shoe",
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
    {
      name: "Realme Airpods",
      price: 1599,
      imgSrc: img4,
      id: "uihcfnn",
    },
    {
      name: "Apple Watch Series 8",
      price: 29999,
      imgSrc: img5,
      id: "oncbhdfv",
    },
    {
      name: "Apple iPad",
      price: 12000,
      imgSrc: img6,
      id: "zxwhhsdcnxlxiow",
    },
    {
      name: "iPhone 13",
      price: 51000,
      imgSrc: img7,
      id: "wqeybdsbcha",
    },
    {
      name: "Black Shoe",
      price: 800,
      imgSrc: img8,
      id: "iuohbcnjncjkn",
    },
    {
      name: "Fire-Boltt",
      price: 1699,
      imgSrc: img9,
      id: "mnxfhuihcfnn",
    },
    {
      name: "Amazon Echo",
      price: 9999,
      imgSrc: img10,
      id: "asfhoncbhdfv",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    // console.log(options);
    toast.success("Added to Cart");
    dispatch({
      type: "addToCart",
      paylaod: options,
    });
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

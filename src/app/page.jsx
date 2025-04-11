import React from "react";

function landingpage() {
  const data = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      price: 9.99,
      rating: 4.94,
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      price: 19.99,
      rating: 3.28,
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    },
    {
      id: 3,
      title: "Powder Canister",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      price: 14.99,
      rating: 3.82,
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    },
    {
      id: 4,
      title: "Red Lipstick",
      description:
        "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      price: 12.99,
      rating: 2.51,
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
    },
    {
      id: 5,
      title: "Red Nail Polish",
      description:
        "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      price: 8.99,
      rating: 3.91,
      image:
        "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
    },
    {
      id: 6,
      title: "Calvin Klein CK One",
      description:
        "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      price: 49.99,
      rating: 4.85,
      image:
        "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
    },
    {
      id: 7,
      title: "Chanel Coco Noir Eau De",
      description:
        "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      price: 129.99,
      rating: 2.76,
      image:
        "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
    },
    {
      id: 8,
      title: "Dior J'adore",
      description:
        "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      price: 89.99,
      rating: 3.31,
      image:
        "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
    },
    {
      id: 9,
      title: "Dolce Shine Eau de",
      description:
        "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
      price: 69.99,
      rating: 2.68,
      image:
        "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
    },
    {
      id: 10,
      title: "Gucci Bloom Eau de",
      description:
        "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
      price: 79.99,
      rating: 2.69,
      image:
        "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
    },
    {
      id: 11,
      title: "Annibale Colombo Bed",
      description:
        "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      price: 1899.99,
      rating: 4.14,
      image:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
    },
    {
      id: 12,
      title: "Annibale Colombo Sofa",
      description:
        "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
      price: 2499.99,
      rating: 3.08,
      image:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
    },
  ];
  return (
    <div className="  m-0 p-0 h-full w-full ">
      <div className="w-screen h-100 inset-0 bg-radial [at_25%_25%] from-purple-400 to-cyan-200 animate-gradientX flex  items-center justify-center ">
        <div className="flex flex-col justify-center items-center h-50 w-100 rounded-2xl bg-box">
          <h1 className="text-2xl font-bold text-white">
            NEW E-COMMERCE IN TOWN
          </h1>
          <h3 className="text-2xl text-pink-300">Explore Latest Collection</h3>
        </div>
      </div>
      <div className="bg-pink-100">
        <div key={data.id} className="grid grid-cols-3">
          {data.map((data) => (
            <div className="h-70 bg-white  w-90 m-10 flex flex-row ">
              <img
                src={data.image}
                height={100}
                width={100}
                className="object-contain"
              />
              <div className="flex flex-col m-2 ">
                <p className="text-box font-bold my-3">{data.title}</p>
                <p>{data.description}</p>
                <p className="font-semibold my-1">Price: {data.price}</p>
                <p className="text-amber-700">Rating: {data.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default landingpage;

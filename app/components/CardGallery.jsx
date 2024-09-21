import React from "react";
import Image from "next/image";

const CardGallery = () => {
  // Example card data
  const cards = [
    {
      id: 1,
      title: "Art Stuff",
      image: "/images/card1.png",
      description: "If a dog chews shoes whose shoes does he choose?",
      badges: ["Fashion", "Products"],
    },
    {
      id: 2,
      title: "ABCD",
      image: "/images/card2.png",
      description: "Stylish and comfortable for all occasions.",
      badges: ["Sport", "Trendy"],
    },
    {
      id: 3,
      title: "EFGH",
      image: "/images/card3.png",
      description: "Perfect for summer outings.",
      badges: ["Casual", "Summer"],
    },
    {
      id: 4,
      title: "IJKL",
      image: "/images/card4.png",
      description: "Perfect for summer outings.",
      badges: ["Casual", "Summer"],
    },
    {
      id: 5,
      title: "Art Stuff",
      image: "/images/card1.png",
      description: "Perfect for summer outings.",
      badges: ["Casual", "Summer"],
    },
    {
      id: 6,
      title: "ABCD",
      image: "/images/card2.png",
      description: "Perfect for summer outings.",
      badges: ["Casual", "Summer"],
    },
    {
      id: 7,
      title: "EFGH",
      image: "/images/card3.png",
      description: "Perfect for summer outings.",
      badges: ["Casual", "Summer"],
    },
    {
      id: 8,
      title: "IJKL",
      image: "/images/card4.png",
      description: "Perfect for summer outings.",
      badges: ["Casual", "Summer"],
    },
  ];

  return (
    <div className="container mx-auto w-screen p-4">
      <div className="grid grid-cols-4 justify-center gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card bg-base-100 w-80 h-96 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <figure>
              <img src={card.image} alt={card.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title pb-6">{card.title}</h2>
              <div className="card-actions justify-between">
                {card.badges.map((badge, index) => (
                  <div
                    key={index}
                    className="btn btn-active btn-primary rounded-full"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGallery;

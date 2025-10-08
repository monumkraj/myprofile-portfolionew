import React from "react";
import Stripe from "./Stripe";


function Stripes() {
  const data = [
    { url: "https://verpex.com/assets/uploads/images/blog/Basic-HTML-Codes-for-Websites.webp?v=1691760654", Number: "18" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkwPqIo9LtZIYghRUECJZrOlkbE6lRMTFag9PoCceDjYd_5OtW9Ge0A9eOc2-9czM6Ys&usqp=CAU", Number: "80" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6e6lvbBEi8ypefp5JrKZregYbTNk17Bdhg&s", Number: "70" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Q277JO9MHBd4BzZqjNW3aJ1xHZs2zXygzf518q9CKX3DDZEAxSYAsxTuZncDfUieye4&usqp=CAU", Number: "25" },
    { url: "https://media.licdn.com/dms/image/v2/D4E12AQGsDp9xrUHXqg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1678346936133?e=2147483647&v=beta&t=BTPG_p5S4l2Xph4noc1GcH-vNSwcgO21YK2mhgzo1bQ", Number: "28" },
    { url: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png", Number: "50" },
  ];

  // Duplicate data to make seamless loop
  const loopData = [...data, ...data];

  return (
    <div className="stripes-container">
      <div className="stripes-slider">
        {loopData.map((elem, index) => (
          <Stripe key={index} val={elem} />
        ))}
      </div>
    </div>
  );
}

export default Stripes;

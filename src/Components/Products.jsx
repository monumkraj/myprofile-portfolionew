import React from "react";
import Product from "./Product";

function Products() {
  const products = [
    {
      title: "HTML",
      description:
        "HTML (HyperText Markup Language) is the standard language used to create and design web pages. It uses tags like <h1>, <p>, and <a> to structure content. HTML defines elements like headings, paragraphs, links, and images for browsers to display.",
      live: true,
      case: false,
    },
    {
      title: "CSS",
      description:
        "CSS (Cascading Style Sheets) is a stylesheet language used to style and format the appearance of HTML elements. It controls layout, colors, fonts, and spacing on web pages. CSS can be applied inline, internally, or externally to HTML documents.",
      live: true,
      case: false,
    },
    {
      title: "JAVASCRIPT",
      description:
        "JavaScript is a high-level, versatile programming language used to create interactive and dynamic content on websites. It enables functionalities like form validation, animations, and real-time updates. JavaScript runs in web browsers and can also be used on servers with environments like Node.js.",
      live: true,
      case: false,
    },
    {
      title: "React.js",
      description:
        "React is a JavaScript library for building user interfaces, especially for single-page applications. It allows developers to create reusable UI components that efficiently update when data changes. Developed by Facebook, React uses a virtual DOM for fast rendering and supports both web and mobile app development.",
      live: true,
      case: false,
    },
  ];

  return (
    <div className="bg-transparent p-5">
      <div className=" mt-5 ">
      {products.map((val, index) => 
        <Product val={val}/>
      )}
    </div>
    </div>
  );
}

export default Products;

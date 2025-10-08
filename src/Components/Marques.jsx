import React from "react";

function Marques() {
  const imageList = [
    { url: "https://www.techasoft.com/debug/img/01-java-horizontal.svg" },
    { url: "https://www.techasoft.com/debug/img/02-javascript-1.svg" },
    { url: "https://www.techasoft.com/debug/img/05-vuejs.svg" },
    { url: "https://www.techasoft.com/debug/img/04-angular-js.svg" },
    { url: "https://www.techasoft.com/debug/img/03-react-1.svg" },
    { url: "https://www.techasoft.com/debug/img/06-solidity.svg" },
    { url: "https://www.techasoft.com/debug/img/12-php-1.svg" },
    { url: "https://www.techasoft.com/debug/img/11-react-native-1.svg" },
    { url: "https://www.techasoft.com/debug/img/13-css-3.svg" },
    { url: "https://www.techasoft.com/debug/img/07-node-js.svg" },
    { url: "https://www.techasoft.com/debug/img/10-swift.svg" },
    { url: "https://www.techasoft.com/debug/img/14-html-5.svg" },
    { url: "https://www.techasoft.com/debug/img/08-golang.svg" },
    { url: "https://www.techasoft.com/debug/img/09-kotlin-2.svg" },
  ];

  return (
    <div className="w-full bg-transparent py-16 flex flex-col items-center justify-center gap-20 overflow-hidden">
      {/* Top Row - Left to Right */}
      <div className="flex whitespace-nowrap animate-marquee">
        {imageList.concat(imageList).map((item, index) => (
          <img
            key={`top-${index}`}
            src={item.url}
            alt="logo"
            className="w-[9vw] mx-10 object-contain"
          />
        ))}
      </div>

      {/* Bottom Row - Right to Left */}
      <div className="flex whitespace-nowrap animate-marquee-reverse">
        {imageList.concat(imageList).map((item, index) => (
          <img
            key={`bottom-${index}`}
            src={item.url}
            alt="logo"
            className="w-[9vw] mx-10 object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default Marques;

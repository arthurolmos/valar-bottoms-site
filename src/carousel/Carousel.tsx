import React from "react";

interface Props {}

const items = [
  {
    src: "/assets/banner/1.jpg",
    title: "Banner 1",
    sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: "/assets/banner/2.jpg",
    title: "Banner 2",
    sub:
      "Phasellus orci turpis, vestibulum in felis non, pretium sodales turpis",
  },
  {
    src: "/assets/banner/3.jpg",
    title: "Banner 3",
    sub:
      "Nulla posuere, tortor et iaculis feugiat, lectus enim viverra est, id tristique est ex a sapien.",
  },
];

function Carousel(props: Props) {
  const {} = props;

  const [counter, setCounter] = React.useState(0);

  function next() {
    counter < items.length - 1 ? setCounter(counter + 1) : setCounter(0);
  }

  function previous() {
    counter > 0 ? setCounter(counter - 1) : setCounter(items.length - 1);
  }

  return (
    <div className="relative block w-full h-600 overflow-hidden">
      {items.map((item, index) => {
        return (
          <div
            className={`${
              counter !== index && "hidden"
            } relative w-full h-600 animate-fade`}
          >
            <img src={item.src} width="100%" />
            <div className="absolute right-10 bottom-10 z-20 text-right text-white">
              <h1 className="text-transform: uppercase text-6xl">
                {item.title}
              </h1>
              <h2 className="text-transform: uppercase text-3xl">{item.sub}</h2>
            </div>
          </div>
        );
      })}

      <div
        className="absolute flex justify-center items-center inset-y-1/2 left-5 text-white cursor-pointer rounded-full bg-black bg-opacity-50 w-20 h-20 transition duration-300 ease hover:bg-opacity-80"
        onClick={previous}
      >
        <div className="m-auto">&lt; </div>
      </div>

      <div
        className="absolute flex justify-center items-center inset-y-1/2 right-5 text-white cursor-pointer rounded-full bg-black bg-opacity-50 w-20 h-20 transition duration-300 ease hover:bg-opacity-80"
        onClick={next}
      >
        <div className="m-auto">&gt; </div>
      </div>
    </div>
  );
}

export default Carousel;

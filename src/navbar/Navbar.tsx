import React from "react";

interface Props {}

const logo = "/assets/logo/logo.jfif";

function Navbar(props: Props) {
  const {} = props;

  return (
    <div className="fixed top-0 right-0 left-0 flex flex-auto bg-white shadow-lg justify-center items-center p-5 px-10 h-100 z-50">
      <div className="flex-1">
        <img src={logo} width="50px" />
      </div>
      <div className="flex flex-1 justify-center items-center">
        VALAR BOTTOMS
      </div>
      <div className="flex flex-1 justify-end">
        <ol className="flex flex-row gap-4 list-none">
          <li>PRODUTOS</li>
          <li>SOBRE</li>
          <li>CONTATO</li>
        </ol>
      </div>
    </div>
  );
}

export default Navbar;

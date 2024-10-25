import React, { useCallback } from "react";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  const options = useCallback( options );
  return (
    <header>
      <nav className="header-nav">
        <LiContainer options={options({ appName: "Redux Shopping App" })} />
      </nav>
    </header>
  );
};

export default Header;
/**
 * This return an array of Element
 * @todo: Need to find a way to pass props to individual elements then what happens? Refactor to break up or some other mechanism?
 * @returns Element[]
 */
function options ( props ) {
  console.log( props.appName );
  return [
    <h2
      className="header-h2"
      style={{ fontFamily: "monospace", fontSize: "30px" }}
    >
      {props.appName}
    </h2>,
    <Cart />,
  ];
}

function LiContainer({ options }) {
  return (
    <ul className="header-ul">
      {options.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

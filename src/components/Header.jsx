import React from "react";
import '../assets/styles/header.css'

const Header = (props) => {
  return (
    <header>
      <div className="header__content">
        <h1 className="title">{props.title}</h1>
        <p className="contenido">{props.content}</p>
      </div>
    </header>
  );
};

export default Header;

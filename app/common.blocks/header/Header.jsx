import React from "react";

import "./header.scss";
import Button from "@/app/components/button/Button";

export default function Header() {
  return (
    <header className="header">
      <div className="title">
        <p className="title__text">Hello World</p>
        <p className="title__description">
          Now, hello world isnt mainstreem, i think
        </p>
      </div>
      <Button text={"Click me!"} />
    </header>
  );
}

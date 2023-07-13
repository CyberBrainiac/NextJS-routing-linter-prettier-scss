import React from "react";

import Header from "./common.blocks/header/Header";
import style from "./home-page.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main className={style.main}></main>
    </>
  );
}

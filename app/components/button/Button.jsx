"use client";
import React from "react";
import "./button-style.scss";
import { useEffect } from 'react';

export default function Button({ text }) {
  useEffect(() => {
    const handleClick = () => {
      window.location.href = 'http://localhost:3000/registration';
    };

    const button = document.querySelector('.default-button');
    button.addEventListener('click', handleClick);

    // Clean up the event listener when the component is unmounted
    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return <button className="default-button">{text}</button>;
}

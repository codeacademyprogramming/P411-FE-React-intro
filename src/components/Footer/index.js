import { useEffect, useState } from "react";

export const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log("i am handling scroll ");
    };
    window.addEventListener("scroll", handleScroll);

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <footer>Hello from footer</footer>;
};

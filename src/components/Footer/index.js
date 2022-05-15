import { useContext, useEffect, useState } from "react";
import { useUserContext } from "../../context/user";

export const Footer = () => {
  const { user } = useUserContext();

  useEffect(() => {
    const handleScroll = () => {
      console.log("i am handling scroll ");
    };
    window.addEventListener("scroll", handleScroll);

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer>
      Hello from footer. This website is now serving {user.firstname}
    </footer>
  );
};

import React from "react";
export const Footer = () => {
  let footerstyle = {
    position: "relative",
    width: "100%"
  };
  return (
    <div className="bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center">Copyright &copy;Mytodolist.com</p>
    </div>
  );
};


import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-white py-10 mt-20">
      <div className="flex justify-center items-center">
        <p className="text-sm text-zinc-400">
          Built with{" "}
          <span role="img" aria-label="love" className="text-red-500">
            ❤️
          </span>{" "}
          by Caleb Benjamin
        </p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="text-sm text-zinc-400">
          © {currentYear} Caleb Benjamin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

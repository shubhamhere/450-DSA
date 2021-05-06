import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bottom-0 p-3 bg-blue-100">
      <div className="text-center text-sm">
       
        <p>
          Made With Love by Shubham😎 | Copyright © {year} |{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/shubhamhere"
            className="decoration-none outline-none text-blue-700"
          >
            🌟 @git/shubhamhere
          </a>{" "}
          | Love Babbar 450
        </p>
      </div>
    </footer>
  );
}

export default Footer;

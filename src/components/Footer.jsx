import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <p>ⓒ {year} Yuvraj</p>
    </footer>
  );
}

export default Footer;

import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // Use map to create an <a> tag for each link
  const navLinks = links.map((link) => (
    <a key={link} href={`#${link}`} style={{ margin: "0 10px" }}> {/* Added some basic styling */}
      {link}
    </a>
  ));

  return <nav>{navLinks}</nav>; // Render the generated links
}

export default NavBar;
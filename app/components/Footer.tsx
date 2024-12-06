import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full bg-black/50 text-white py-4 text-center mt-8"
      aria-label="Footer"
    >
      <p className="text-sm">
        © {new Date().getFullYear()} Multiversers. All rights reserved.
        <span className="sr-only">
          All content on this site is protected by copyright law.
        </span>
      </p>
    </footer>
  );
};

export default Footer;

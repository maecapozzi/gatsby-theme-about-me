import React from "react";
import Link from "./Link";

const Links = ({ links }) => (
  <ul>
    {links.map(link => {
      return (
        <li>
          <p>
            <Link link={link.link}>{link.name}</Link>
          </p>
        </li>
      );
    })}
  </ul>
);

export default Links;

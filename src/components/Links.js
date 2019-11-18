import React from "react";
import Link from "./Link";

const Links = ({ links }) => (
  <ul>
    {links.map(link => {
      return (
        <li>
          <Link link={link.link}>
            <p>{link.name}</p>
          </Link>
        </li>
      );
    })}
  </ul>
);

export default Links;

import React from "react";
import navList from "./navList";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-wrap gap-4 container">
        {navList &&
          navList.map((item, idx) => (
            <li key={idx}>
              <Link href={`${item?.path}`} className="block h-full py-2">
                {item?.label || ""}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navigation;

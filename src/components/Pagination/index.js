import { useRouter } from "next/router";
import React from "react";

const Pagination = ({ currentPage, limit, countPages, hasPosts }) => {
  const router = useRouter();
  const changeLayoutData = (step) => {
    let page = currentPage;
    switch (step) {
      case "prev":
        page = currentPage - 1;
        break;
      case "next":
        page = currentPage + 1;
        break;
      default:
        break;
    }
    router.push(`/posts?page=${page}&limit=${limit}`);
  };

  return (
    <div>
      <ul className={`flex ${currentPage > 1 ? "gap-4" : ""} flex-nowrap py-3`}>
        <li>
          {currentPage > 1 && (
            <button onClick={() => changeLayoutData("prev")}>Prev</button>
          )}
        </li>
        <li className={`${currentPage === 1 ? "mr-4" : ""}`}>
          Page <span className="font-bold">{currentPage}</span> of{" "}
          <span className="font-bold">{countPages}</span>
        </li>
        <li>
          {hasPosts && (
            <button onClick={() => changeLayoutData("next")}>Next</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

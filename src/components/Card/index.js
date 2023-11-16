import Link from "next/link";
import React from "react";

const Card = ({ card }) => {
  return (
    <div className=" flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/posts/post/${card.id}`} className="block">
        <img
          className="rounded-t-lg mx-auto"
          src="https://placehold.co/600x400"
          alt=""
        />
      </Link>
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <Link href={`/posts/post/${card.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {card.title}
            </h5>
          </Link>
          <p className="mb-3 max-w-full font-normal overflow-hidden whitespace-nowrap text-ellipsis text-gray-700 dark:text-gray-400">
            {card.body}
          </p>
        </div>

        <Link
          href={`/posts/post/${card.id}`}
          className="inline-flex self-start w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;

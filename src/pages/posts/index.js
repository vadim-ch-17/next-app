import React from "react";
import { postsApi } from "@/services/api";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import Title from "@/components/Title";

const Posts = ({ data, currentPage, limit, totalPages }) => {
  console.log(data);
  return (
    <div className="container">
      <Title size={"2xl"}>Posts</Title>
      <div className="grid grid-cols-fluid gap-3 justify-center">
        {data && data.map((post) => <Card card={post} key={post.id} />)}
      </div>
      <Pagination
        currentPage={+currentPage}
        limit={+limit}
        countPages={totalPages}
        hasPosts={+currentPage < totalPages}
      />
    </div>
  );
};
export async function getServerSideProps({ query }) {
  const currentPage = query.page || "1";
  const limit = query.limit || "6";
  const res = await fetch(`${postsApi}?_page=${currentPage}&_limit=${limit}`);
  const data = await res.json();
  const totalCount = res.headers.get("x-total-count");
  const totalPages = Math.ceil(totalCount / limit);

  return {
    props: {
      data,
      currentPage,
      limit,
      totalPages,
    },
  };
}

export default Posts;

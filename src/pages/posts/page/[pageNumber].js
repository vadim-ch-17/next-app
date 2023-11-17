import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { postsApi } from "@/services/api";
import Card from "@/components/Card";

const Posts = ({ data }) => {
  const router = useRouter();
  const { pageNumber } = router.query;
  const currentPage = pageNumber ? parseInt(pageNumber) : 0;
  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {data && data.map((post) => <Card card={post} key={post.id} />)}
      </div>
      <div>
        {currentPage > 1 && (
          <Link href={`/posts/page/${parseInt(pageNumber) - 1}`}>
            <span>Previous Page</span>
          </Link>
        )}

        {pageNumber < 10 && (
          <Link href={`/posts/page/${parseInt(pageNumber) + 1}`}>
            <span>Next Page</span>
          </Link>
        )}
      </div>
    </div>
  );
};
export async function getStaticPaths() {
  const res = await fetch(postsApi);
  const data = await res.json();
  const paths = Array.from(
    { length: parseInt(data.length / 10) },
    (_, i) => i + 1
  ).map((item) => ({
    params: { pageNumber: item.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;

  const pageNumber = params?.pageNumber ? parseInt(params.pageNumber) : 1;
  const res = await fetch(`${postsApi}?_page=${pageNumber}&_limit=10`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
export default Posts;

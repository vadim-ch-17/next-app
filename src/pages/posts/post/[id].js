import React from "react";
import { useRouter } from "next/router";
import { postsApi } from "@/services/api";
import Loader from "@/components/Loader";
import Title from "@/components/Title";

const Post = ({ post }) => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div className="container">
      <Loader isShow={false} />
      <button
        className="blue-button mb-4"
        onClick={() => {
          router.back();
        }}>
        Back
      </button>
      <Title size={"xl"}>{post.title}</Title>
      <p className="text-base md:text-xl max-w-5xl mx-auto mb-4">{post.body}</p>
      <button
        className="blue-button"
        onClick={() => {
          router.back();
        }}>
        Back
      </button>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const id = params?.id;

  const res = await fetch(`${postsApi}/${id}`);
  const post = await res.json();
  return { props: { post } };
}

export default Post;

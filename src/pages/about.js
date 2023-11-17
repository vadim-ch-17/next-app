import React from "react";

const about = ({ data }) => {
  return <div>about</div>;
};

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
export default about;

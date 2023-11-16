import Link from "next/link";

const home = () => {
  return (
    <>
      <h1 className="text-center font-extrabold">Home</h1>
      <Link href={"/posts"}>Posts</Link>
    </>
  );
};
export default home;

import Layout from "@/layout/Layout";
import Post from "@/components/post";
import { useRouter } from "next/router";

export default function Page({ post }) {
  return (
    <Layout>
      <Post post={post} />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await fetch("http://localhost:3000/api/posts/" + params.postId);
  const post = await res.json();
  return { props: { post } };
};

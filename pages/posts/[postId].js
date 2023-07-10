import Layout from "@/layout/Layout";
import Post from "@/components/post";

export default function Page({ post }) {
  return (
    <Layout>
      <Post post={post} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts/1");
  const post = await res.json();
  return { props: { post } };
};

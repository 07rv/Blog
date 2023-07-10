import Layout from "@/layout/Layout";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Banner from "@/components/banner";
export default function Home(props) {
  return (
    <Layout>
      <Banner />
      <Section1 />
      <Section2 posts={props.posts} />
      <Section3 popular={props.popular} />
      <Section4 />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  const res1 = await fetch("http://localhost:3000/api/popular");
  const popular = await res1.json();
  return { props: { posts, popular } };
};

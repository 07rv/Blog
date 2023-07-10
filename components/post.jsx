import Author from "./_child/author";
import Image from "next/image";
import Realted from "./_child/realted";

const post = ({ post }) => {
  return (
    <section className="container mx-auto md:px-2 py-16 w-1/2">
      <div className="flex justify-center">
        <Author />
      </div>

      <div className="post py-10">
        <h1 className="font-bold text-4xl text-center pb-5">{post.title}</h1>

        <p className="text-gray-500 text-xl text-center">{post.subtitle}</p>

        <div className="py-10">
          <Image src={post.img || "/"} width={900} height={600}></Image>
        </div>

        <div className="content text-gray-600 text-lg flex flex-col gap-4">
          {post.description}
        </div>
      </div>
      <Realted />
    </section>
  );
};

export default post;

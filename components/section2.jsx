import Link from "next/link";
import Author from "./_child/author";
import Image from "next/image";
const section2 = ({ posts }) => {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {posts.map((value, index) => (
          <Post key={index} data={value} />
        ))}
      </div>
    </section>
  );
};

function Post({ data }) {
  const { id, title, subtitle, category, img, description, published, author } =
    data;
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            alt="img"
            src={img || "/"}
            className="rounded"
            width={500}
            height={350}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            {category}{" "}
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            {published}
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{subtitle}</p>

        {author && <Author />}
      </div>
    </div>
  );
}
export default section2;

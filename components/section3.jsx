import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";

const section3 = ({ popular }) => {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-6">
        {popular.slice(0, 2).map((value, index) => (
          <div
            key={index}
            className="flex justify-center border-2 border-gray-300 rounded-xl p-6 bg-gray-100"
          >
            <Post data={value} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default section3;

function Post({ data }) {
  const { id, title, subtitle, category, img, description, published, author } =
    data;
  return (
    <div className="grid">
      <div className="images">
        <Link href={"/"}>
          <Image alt="img" src={img || "/"} width={600} height={400} />
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
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{subtitle}</p>
        <Author />
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

const section1 = () => {
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Treading</h1>
        {Slide()}
      </div>
    </section>
  );
};

export default section1;

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/images/img1.avif"} width={600} height={600} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link className="text-orange-400 hover:text-orange-700" href={"/"}>
            Busniess, travel
          </Link>
          <Link className="text-gray-400 hover:text-gray-700" href={"/"}>
            - July 2023
          </Link>
        </div>
        <div className="title">
          <Link
            className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
            href={"/"}
          >
            Your most unhappy customers are your greatest source of learning
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi
          ea eius omnis molestiae sunt, quos nam! Quae asperiores labore minus
          tempora repellendus fuga earum modi, veritatis mollitia eligendi.
          Repudiandae.
        </p>
        <Author />
      </div>
    </div>
  );
}

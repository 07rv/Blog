import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";

const section3 = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-6">
        <div className="flex justify-center border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
          {Post()}
        </div>
        <div className="flex justify-center border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
          {Post()}
        </div>
      </div>
    </section>
  );
};

export default section3;

function Post() {
  return (
    <div className="grid">
      <div className="images">
        <Link href={"/"}>
          <Image alt="img" src={"/images/img1.avif"} width={600} height={400} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Business, Travel
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            July 3, 2022
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            Your most unhappy customers are your greatest source of learning
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        <Author></Author>
      </div>
    </div>
  );
}

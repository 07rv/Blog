import Image from "next/image";
import Link from "next/link";

const author = ({ author }) => {
  return (
    <div className="author flex py-5">
      <Image
        alt="img"
        src={"/authors/author1.jpg"}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center px-4">
        <Link
          href={"/"}
          className="text-md font-bold text-gray-800 hover:text-gray-600"
        >
          Rohit Verma
        </Link>
        <span className="text-sm text-gray-500">CEO & founder</span>
      </div>
    </div>
  );
};

export default author;

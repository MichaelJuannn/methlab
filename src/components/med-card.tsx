import Image from "next/image";
import Link from "next/link";

export default function Card({
  name,
  description,
  keyId,
}: {
  name: string;
  description: string;
  keyId: number;
}) {
  return (
    <div className="flex justify-center">
      <div className="block max-w-sm rounded-lg bg-slate-300 px-2 pt-2 shadow-lg">
        <a href="#!">
          <img
            className="rounded-lg"
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="mb-4 overflow-hidden text-ellipsis text-xl font-medium leading-tight text-neutral-800">
            {name}
          </h5>
          <p className="mb-4 text-base text-neutral-600">
            {description.substring(0, 250)}....
          </p>
          <Link href={`./${keyId}`}>
            <button
              type="button"
              className="inline-block rounded bg-secondary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-lg shadow-primary transition duration-150 ease-in-out hover:shadow-red-800 focus:outline-none focus:ring-0 active:bg-transparent "
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Lihat Lebih Lanjut
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

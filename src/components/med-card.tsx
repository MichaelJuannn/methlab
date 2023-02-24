import Image from "next/image";

export default function Card() {
  return (
    <div className="flex justify-center">
      <div className="block max-w-sm rounded-lg bg-slate-300 p-3 shadow-lg">
        <a href="#!">
          <img
            className="rounded-lg"
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
            Parasetamol
          </h5>
          <p className="mb-4 text-base text-neutral-600">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            className="inline-block rounded bg-secondary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-lg shadow-primary transition duration-150 ease-in-out hover:shadow-red-800 focus:outline-none focus:ring-0 active:bg-transparent "
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Lihat Lebih Lanjut
          </button>
        </div>
      </div>
    </div>
  );
}
